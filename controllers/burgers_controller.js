var express = require('express')

var burger = require('../models/burger.js')

module.exports = function(app, PORT) {
	app.listen(PORT, function() {
      console.log("Listening on PORT " + PORT);
    });
    
    app.get('/', function (err, res) {
        burger.selectAll(function(req, resp){
            res.render('index', {burgers: resp});
        })
	});
    
    app.post('/', function(req, res){
        var burgerName = req.body.newBurger;
        burger.insertOne(burgerName, function(err, data){
            
        res.redirect('/');
        })
    });  
    
    app.post('/eat/:id', function(req, res){
        var id = req.params.id;
        burger.eatOne(id, function(err, data){
            
        res.redirect('/');
        })
    });
    
    app.post('/throwup/:id', function(req, res){
        var id = req.params.id;
        burger.throwUpOne(id, function(err, data){
            
        res.redirect('/');
        })
    });  
}