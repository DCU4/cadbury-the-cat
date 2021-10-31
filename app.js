'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");
const contentful = require('contentful');
const axios = require('axios');
let credentials;
if (fs.existsSync('./credentials.json')) {
  credentials = require('./credentials.json');
}
const client = contentful.createClient({
  space: process.env.space ? process.env.space : credentials.space,
  accessToken: process.env.accessToken ? process.env.accessToken : credentials.accessToken
});


// app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs')


async function getWork() {
  const entries = await client.getEntries({ content_type: 'work' })
  return entries.items
}


async function getCustomEntries(entry) {
  const entries = await client.getEntries({ content_type: entry })
  return entries.items
}


app.get('/', (req, res) => {
  if (res.statusCode === 200){
    getCustomEntries('cadbury')
    .then(data => {
      let images = data[0].fields.images;
      res.render('index', {data: images});
    })
    .catch(err => console.log(err));
    
  } else {
    res.sendStatus(404)
  }
});


app.listen(process.env.PORT || 8081, () => {
  console.log('connected to serverrrr');
});