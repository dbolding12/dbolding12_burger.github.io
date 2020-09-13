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

router.post('/burgers/update',function(req,res){
    console.log(req.body);
  burger.update(1, req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.post('/burgers/create',function(req,res){
  if(req.body.burger_name){
    burger.create(req.body.burger_name, function(result){
      res.redirect('/');
    })
  } else{
    res.redirect('/');
  }
 
})

module.exports = router;
