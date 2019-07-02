'use strict';

const express = require('express');
let i=0;
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

app.get('/count', (req, res) => {
    i = i+1
    res.send( ""+i);
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);