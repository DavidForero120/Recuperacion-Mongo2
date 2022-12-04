const express = require('express');
const ejs = require('ejs');
const path = require('path');
const server = express();

server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs');


server.use('/', require('./routes/mongo.routes'));


server.use(express.static('public'));

server.listen(3000, ()=>{
      console.log('connect')
})