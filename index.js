const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "mushir",
        content: "I want to meet someone",
    },
    {
        username: "farhan",
        content: "I want to go home",
    },
    {
        username: "umar",
        content: "I like village life",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});