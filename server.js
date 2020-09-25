//this should be your domain name
let hostname = "https://niny.io";
//==============================================
//standard express server
const express = require("express");
const app = express();
//prevent abuse
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60 // You can make max 60 links per min (pretty generous tbh)
});
app.use(limiter);

//using keyV bc it's all we really need for a simple app like this
const Keyv = require("keyv");
const links = new Keyv("sqlite://database.sqlite");
//regex used to validate links
var urlregex = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
);
//generate random links if no vanity url is provided
const words = require("friendly-words");

//parse incoming json files
app.use(express.json());

//serve static files in public directory
app.use(express.static("public"));
//https redirect

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
  try{
  let json = request.body;
  if (json.vanity.trim() == "") {
    json.vanity = await generateuuid();
  }
  //if the vanity is not taken
  if (!(await links.get(json.vanity))) {
    //if the link is valid
    if (json.newlink.match(urlregex)) {
      links.set(json.vanity, json.newlink);
      response.json({
        status:
          "Success! You can view your link at " + hostname + "/" + json.vanity,vanity:json.vanity,url:hostname+"/"+json.vanity
      });
    } else {
      response.status(400).send("URL invalid");
    }
  } else {
    console.log(json.vanity.trim());
    response.status(409).send("Vanity already taken :(");
  }
}catch(e){
      response.status(400).send("Bad Request");
console.log(e)

}
});

//direct link to vanity using /vanity instead of using query params for shorter links :D
app.get("/:vanity", async (request, response) => {
 try{
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
  }catch(e){
      response.status(400).send("Bad Request");
console.log(e)
}
});
//integration with discord.bio :)
app.get("/p/:vanity", async (request, response) => {
  try{
  let vanityurl = request.params.vanity;
    response.redirect("https://discord.bio/p/"+vanityurl);
  }catch(e){
        response.status(404).send("Vanity does not exist");
  }
});
async function generateuuid() {
  //no vanity provided, generate one :D
  let founduniqueidentifier = false;
  //loop until we find a unique link that we can use to generate a shortened link
  while (!founduniqueidentifier) {
    let unique = await getwords(1, "-");
    console.log(unique);
    if (!(await links.get(unique))) {
      founduniqueidentifier = true;
      return unique;
    }
  }
}
async function getwords(count, seperator) {
  const { predicates, objects } = words;
  const pCount = predicates.length;
  const oCount = objects.length;
  const output = [];

  for (let i = 0; i < count; i++) {
    const pair = [
      predicates[Math.floor(Math.random() * pCount)],
      objects[Math.floor(Math.random() * oCount)]
    ];
    output.push(pair.join(seperator));
  }

  return output;
}
