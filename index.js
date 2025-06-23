const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // enable method override

let items = [];

app.get("/", function (req, res) {
    res.render("list", { ejes: items });
});

app.post("/", function (req, res) {
    const item = req.body.task;
    items.push(item);
    res.redirect("/");
});

// PUT route to update a task
app.put("/edit/:index", function (req, res) {
    const idx = req.params.index;
    items[idx] = req.body.updatedTask;
    res.redirect("/");
});

// DELETE route to delete a task
app.delete("/delete/:index", function (req, res) {
    const idx = req.params.index;
    items.splice(idx, 1);
    res.redirect("/");
});

app.listen(4000, function () {
    console.log("Server Started!");
});
