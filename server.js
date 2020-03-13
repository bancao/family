//server.js

var express = require('express');
var app = express();
var d3 = require('d3');

app.get('/d3.v3.min.js',function(req,res){
    res.sendFile(__dirname + '/' + 'd3.v3.min.js');
})

app.get('/demo.js',function(req,res){
    res.sendFile(__dirname + '/' + 'demo.js');
})

app.get('/demo.json',function(req,res){
    res.sendFile(__dirname + '/' + 'demo.json');
})

app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'demo.html');
})
app.get('/demo.html',function(req,res){
    res.sendFile(__dirname + '/' + 'demo.html');
})
app.get('/d3.js',function(req,res){
    res.sendFile(__dirname + '/' + 'node_modules/d3/dist/d3.js');
})
var server = app.listen('3000',function(){

    console.log('server start 127.0.0.1');
})