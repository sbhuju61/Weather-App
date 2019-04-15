const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const axios = require('axios');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
const latitude = 4
const longitude = 5

const apiKey = "1c6c28d74a5ed7917aa2cc1522e76d68"
app.get('/time', (req, res) => {
    res.send(new Date().toLocaleString())
  })
app.get('/api/greeting', (req, res) => {
  
  res.setHeader('Content-Type', 'application/json');
    res.send({"hello": "hello"})
    //console.log(process.env)
 
  
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);



