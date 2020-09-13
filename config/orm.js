// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' +tableInput+';', function(err,result){
      if(err) throw err;
      cb(result)
    })
  },

update: function(tableInput, val, condition, cb){
  connection.query('UPDATE '+tableInput+' SET devoured='+val+' WHERE id='+condition+';', function(err,result){
      if(err)throw err;
      cb(result);
    })
  },

  create: function(tableInput,val,cb){
    connection.query('INSERT INTO '+tableInput+"(burger_name) VALUES ('"+val+"');", function(err,result){
      if(err)throw err;
      cb(result);
    })
  }
}

module.exports = orm;