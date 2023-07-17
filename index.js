/** @format */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


//calculating circle first
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.post('/circle',(req,res) => {
  const {radius} = req.body;
  res.send(`The area of the circle is ${Math.PI * radius * radius}`)
})


//calculating area of triangle
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});


app.post('/triangle',(req,res) => {
  const {height, width} = req.body;
  res.send(`The area of the triangle is ${0.5 * height * width}`)
})


app.listen(3000, () => {
  console.log("server running at 3000 port");
});
