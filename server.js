var express = require("express");   
var exphbs = require("express-handlebars");                      
var bodyParser = require("body-parser");                            
var routes = require("./controllers/burgers_controller.js");      
var app = express();                                           
var PORT = process.env.PORT || 8080;                              

//public folder
app.use(express.static("public"));                                

//parses JSON
app.use(bodyParser.json());                                         
app.use(bodyParser.urlencoded({ extended: true }));                 


app.engine("handlebars", exphbs({                                 
    defaultLayout: "main"                                        
}));

app.set("view engine", "handlebars");                               

// API CALL
app.use(routes);                                                 
app.listen(PORT, function(){                             
console.log("Listening on Port: " + PORT);
});