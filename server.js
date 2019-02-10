const express = require("express");
const people = require("./people.json");

const app = express();

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));
const port =process.env.PORT || 8080

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to JearBreezy's Testing Envi",
    people: people.profiles
  });
});

app.get("/profile", (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render("profile", {
    title: `About ${person.firstname} ${person.lastname}`,
    person
  });
});

const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
