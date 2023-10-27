var mongoose = require('mongoose');
var FigureSchema = mongoose.Schema(
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
var figuremodel = mongoose.model('figure', FigureSchema, 'figure');
module.exports = figuremodel;