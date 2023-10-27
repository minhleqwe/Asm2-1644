var mongoose = require('mongoose');
var ToySchema = mongoose.Schema(
   {
      name:{
         type:String,
      },
      category:{
         type:String,
      },
      image:{
         type:String,
      },
      price:{
         type:String,
      }
   }
);
var toymodel = mongoose.model('robot', ToySchema, 'robot');
module.exports = toymodel;