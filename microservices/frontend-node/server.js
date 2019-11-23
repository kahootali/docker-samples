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
  request(String(`http://backend:8080/instructor/${id}`), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      name = "Hello "+obj.firstName + " " + obj.lastName
      res.send(name);
    }
  })

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);