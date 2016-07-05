"use strict"

const fs = require('fs')
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));
server.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const guests = require('./guests.json')

//  Public folders  ////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

// app.GET  ////////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
  res.render('home');
});

// 404 -------------------------------------------------------------------------
app.get('*', function(req, res){
  res.render('404');
});

// Socket.io -------------------------------------------------------------------
io.on('connection', function (socket) {
  socket.emit('unOrderedGuests', { guests: guests });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});
