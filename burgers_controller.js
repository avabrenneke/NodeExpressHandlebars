//require Express
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//GET
router.get("/", function (req, res) {
    burger.selectAll(function (data) {                
        var burgerBurger = {
            burgers: data
        };
        res.render("index", burgerBurger);
    });
});

//Post (create)
router.post("/insertOne", function (req, res) {
    burger.insertFunc(req.body.burger_name, function (cheese) {
        res.redirect("/")
    });
});

//Post (update)
router.post("/updateOne/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
});

//Post (delete)
router.post("/deleteOne/:id", function (req, res) {    
    var condition = "id = " + req.params.id;                
    burger.deleteOne(condition, function () {
        res.redirect("/");
    });
});
module.exports = router;  