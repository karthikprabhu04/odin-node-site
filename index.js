const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"))
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"))
});

app.get("/404.html", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"))
});

app.listen(8080, () => console.log("Server is running on http://localhost:8080"));