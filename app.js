"use strict"
const fs = require('fs')
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));

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

app.listen(app.get('port'), function(){
   console.log('Node app is running on port', app.get('port'));
});
