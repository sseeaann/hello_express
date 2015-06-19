// Load the express module
var express = require("express");
// require body-parser
var bodyParser = require("body-parser");

// Invoke var express and store the resulting application in var app
var app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// use bodyParser
app.use(bodyParser.urlencoded());

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views");
// Now set the view engine itself so express knows we are using ejs
app.set("view engine", "ejs");

// Let's handle the base route "/" (root route):
app.get('/', function(request, response){
	response.render("index", {title: "my Express project"});
});
// route to process new user form data:
app.get("/users", function(request, response){
	// code to add user to db goes here!
	// redirect the user back to the root route.
	response.redirect('/');
});
app.get("/users/:id", function(request, response){
	console.log("The user id requested is: ", request.params.id);
	// just to illustrate that request.params is usable here:
	response.send("You requested the user with id: " + request.params.id);
	// code to get user from db goes here, etc...
});

// route to process new user form data:
app.post("/users", function(request, response){
	console.log("POST DATA \n\n", request.body)
	// code to add user to db goes here!
	// redirect the user back to the root route.
	response.redirect('/');
});

// Tell the express app on which port to listen
app.listen(8000, function(){
	console.log("Listeing on port 8000");
})
// This line will almost always be at the end of your server.js file.
// We only tell the the server to listen after we set up all of our rules.