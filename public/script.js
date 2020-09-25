function genLink() {
  let vanity = document.getElementById("vanity").value;
  let urltoshorten = document.getElementById("urltoshorten").value;
  const data = { vanity: vanity, newlink: urltoshorten };
  fetch("/shortenlink", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.status == 200) {
        return res.json();
      } else if (res.status == 409) {
        sendAlert("Error", "This vanity URL is already taken", "error");
      } else {
        sendAlert(
          "Error",
          "The link you want to shorten is not valid/is blacklisted",
          "error"
        );
      }
    })
    .then(json => {
        sendLink(
          "Success",
          json.status,
          "success",
          json.url
        );    });
}


$( "#urltoshorten" ).focus(function() {
$("#urltoshorten").velocity({
   transform: ["scale(1.05)", "scale(1)"],
}, {
   duration: 500,
});
});

$( "#urltoshorten" ).blur(function() {
$("#urltoshorten").velocity({
   transform: ["scale(1)", "scale(1.05)"],
}, {
   duration: 500,
});

});
$( "#vanity" ).focus(function() {
$("#vanity").velocity({
   transform: ["scale(1.03)", "scale(1)"],
}, {
   duration: 500,
});
});

$( "#vanity" ).blur(function() {
$("#vanity").velocity({
   transform: ["scale(1)", "scale(1.03)"],
}, {
   duration: 500,
});
})
var inputs = document.querySelectorAll('#vanity');
for(let i=0; i<inputs.length; i++){
    inputs[i].setAttribute('size',inputs[i].getAttribute('placeholder').length);
}
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}