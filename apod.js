var base_url = "https://api.nasa.gov/"
var api_key = "2YsiBAq53hmt7nSIZuYGDNmQnUbhkQkxrryS8bao"
var database = "apod"

var full_url = base_url + "planetary/" + database

var call = ""

call = full_url + "?api_key=" + api_key

var fetch = require("node-fetch"); // this is here so NodeJS can call fetch

fetch(call).then(function(response) {
    return response.json();
}).then(function(text) {
    console.log(text);
});
