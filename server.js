//standard express server
const express = require("express");
const app = express();

//using keyV bc it's all we really need for a simple app like this
const Keyv = require("keyv");
const links = new Keyv("sqlite://database.sqlite");

//regex used to validate links
var urlregex = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
);
//generate random links if no vanity url is provided
const { v4 } = require("uuid");

//parse incoming json files
app.use(express.json());

//serve static files in public directory
app.use(express.static("public"));

//listen on port 3000
app.listen(3000, () => {
  console.log(`psty app listening at 3000`);
});

//serve webpage
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
//literally this simple, we check if vanity is taken. if not, we create a new entry in db
app.post("/shortenlink", async (request, response) => {
  let json = request.body;
  //if the vanity is not taken
  if (!(await links.get(json.vanity))) {
    //if the link is valid
    if (json.newlink.match(urlregex)) {
      links.set(json.vanity, json.newlink);
      response.json({
        status:
          "Success! You can view your link at " +
          request.get("host") +
          "/" +
          json.vanity
      });
    } else {
      response.status(400).send("URL invalid");
    }
  } else if (json.vanity.trim() == "") {
    //no vanity provided, generate one :D
    let founduniqueidentifier = false;
   //loop until we find a unique link that we can use to generate a shortened link 
    while (!founduniqueidentifier) {
      let unique = v4().substring(0, 6);
      console.log(unique)
      if (!(await links.get(unique))) {
        founduniqueidentifier = true;
        links.set(unique, json.newlink);
        response.json({
          status:
            "Success! You can view your link at " +
            request.get("host") +
            "/" +
            unique
        });
      }
    }
  } else {
    console.log(json.vanity.trim())
    response.status(409).send("Vanity already taken :(");
  }
});

//direct link to vanity using /vanity instead of using query params for shorter links :D
app.get("/:vanity", async (request, response) => {
  let vanityurl = request.params.vanity;
  let finalurl = await links.get(vanityurl);
  if (finalurl) {
    if (!/^https?:\/\//i.test(finalurl)) {
      finalurl = "https://" + finalurl;
    }
    response.redirect(finalurl);
  } else {
    response.status(404).send("Vanity does not exist");
  }
});
