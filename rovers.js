var base_url = "https://api.nasa.gov/"
var api_key = "2YsiBAq53hmt7nSIZuYGDNmQnUbhkQkxrryS8bao"
var database = "mars-photos"

var rover = "Curiosity" // Curiosity, opportunity, spirit

var full_url = base_url + database + "/api/v1/rovers/" + rover

var date = "latest_photos"  // date format of YYYY-M-D

var call = ""

// This build the URL for photo querying
//if (date == "latest_photos") {
//    call = full_url + "/latest_photos?" + "&api_key=" + api_key
//} else {
//    call = full_url + "/photos?" + "earth_date=" + date + "&api_key=" + api_key    
//}

// TODO: migrate to select manifest or latest photo
call = base_url + database + "/api/v1/manifests/" + rover + "?api_key=" + api_key

var fetch = require("node-fetch"); // this is here so NodeJS can call fetch

fetch(call).then(function(response) {
    return response.json();
}).then(function(text) {
    console.log(text);
});


