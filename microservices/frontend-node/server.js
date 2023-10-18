'use strict';

const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const axios = require('axios');

// App
const app = express();
app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

app.get('/instructor/:id', async (req, res) => {
  let id = Number(req.params.id)
  let name = ""
  let url  = process.env.BACKEND_URL;
  try {
    const response = await axios.get(String(`http://${url}/instructor/${id}`));
    name = "Hello Instructor " +response.data.id + ", Name: " +response.data.firstName + " " + response.data.lastName + ".... Hope you are teaching well!! "
    res.send(name);
  } catch (error) {
    console.error('Error fetching instructors:', error);
    res.status(500).json({ error: 'Could not fetch instructors' });
  }
});

app.get('/student/:id', async (req, res) => {
  let id = Number(req.params.id)
  let name = ""
  let url  = process.env.BACKEND_URL;
  try {
    const response = await axios.get(String(`http://${url}/student/${id}`));
    name = "Hello Student  "+response.data.id +", Name: "+response.data.firstName + " " + response.data.lastName + ".... Hope you are learning well!! "
    res.send(name);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Could not fetch student' });
  }
});


app.listen(PORT, HOST); 
console.log(`Running on http://${HOST}:${PORT}`);
