CERT_URL = './cert/murmur-firebase.json';

var express = require("express");
var app     = express();
var path    = require("path");
var firebase = require('firebase-admin');

var serviceAccount = require(CERT_URL);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://murmur-183618.firebaseio.com'
});

app.set('firebase', firebase);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/editor/python/index.html'));
});

app.get('/docs',function(req,res){
  res.sendFile(path.join(__dirname+'/api/docs/index.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.listen(3000);


