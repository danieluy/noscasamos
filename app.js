"use strict"
const fs = require('fs')
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

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

app.listen(2402, function(){
   console.log(
      '/////////////////////////////////////////////\n' +
      '//                                         //\n' +
      '//   Server listening on: localhost:2402   //\n' +
      '//       Press Ctrl-C to terminate         //\n' +
      '//                                         //\n' +
      '/////////////////////////////////////////////'
   );
});
