'use strict';

const port = process.env.PORT || 8080;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/time', (req, res) => {
  res.send(new Date().toISOString());
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});