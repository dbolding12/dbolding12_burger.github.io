const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

//routes

router.get('/', function(req,res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data});

  })
})

router.put('/burgers/update',function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.post('/burgers/create',function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

module.exports = router;
