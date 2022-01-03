const express = require('express');
const app = express();
const port = 4000
let day = new Date().getDate();
let hour = new Date().getHours();

const timer = (req, res, next)=> {
    
      if (hour > 9 && hour < 17 && day > 0 && day < 6) {
          next()
      } else {
          res.send(`<h1>Sorry, we are currently closed</h1>`)
      }
  }

app.use(timer);

app.get("/Home", (req, res) => {
    res.sendFile(__dirname + "/pages/home.html");
  });
  app.get("/Services", (req, res) => {
    res.sendFile(__dirname + "/pages/services.html");
  });
  app.get("/Contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html");
  });



app.listen(port, (err) => {
    err ? console.log(err)
    : console.log (`server is running on port ${port}...`)
})