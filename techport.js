var base_url = "https://api.nasa.gov/"
var api_key = "2YsiBAq53hmt7nSIZuYGDNmQnUbhkQkxrryS8bao"
var database = "techport"

var full_url = base_url + database + "/api"

var call = full_url + "/projects" + "?api_key=" + api_key

var fetch = require("node-fetch"); // this is here so NodeJS can call fetch

fetch(call).then(function(response) {
    return response.json();
}).then(function(j) {
    id = Math.floor(Math.random() * j.projects.totalCount);  // returns a random integer from 0 to max count of projects
    var project_id = j.projects.projects[id].id; // Select a row of the project
    console.log("Selected Project ID: " + project_id);
    return project_id;
}).then(function(id) {
    call = full_url + "/projects/" + id + "?api_key=" + api_key;
    fetch(call)
        .then(response => response.json())
        .then(j => console.log(j) ) // Just print the JSON
        .catch(error => console.log(error) );
}).catch(error => console.log(error) );


