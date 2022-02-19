'use strict';

const express = require('express');
let id = 0;
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

var request = require('request');

app.get('/instructor/:id', (req, res) => {
  id = Number(req.params.id)
  let name = ""
  let url  = "backend:8080";
  //let url  = process.env.BACKEND_URL;
  
  request(String(`http://${url}/instructor/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      name = "Hello "+obj.firstName + " " + obj.lastName
      res.send(name);
    }
  })

});

app.get('/student/:id', (req, res) => {
  id = Number(req.params.id)
  let name = ""
  let url  = "backend:8080";
  // let url  = process.env.BACKEND_URL;
  request(String(`http://${url}/student/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      if (id == 5) {
        name = "Hello "+obj.firstName + " " + obj.lastName + ", You need to improve on your skills"
      } else {
        name = "Hello "+obj.firstName + " " + obj.lastName + ", You are going to become a great DevOps Engineer"
        
      }
      
      res.send(name);
    }
  })

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);