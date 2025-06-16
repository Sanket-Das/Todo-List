const express = require("express");
const bodyParser = require("body-parser");


// app.use(express.static('public'));

var app = express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
var items = [];

var example = "working";
app.get("/",function(req,res){
    res.render("list",{ejes:items});
});

app.post("/",function(req,res){
    var item = req.body.task;
    items.push(item);
    res.redirect("/");
});



app.listen(4000,function(){
    console.log("Server Started!");
});

