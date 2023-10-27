var express = require('express');
var router = express.Router();
var robotmodel = require("../models/robotmodel")
var figuremodel = require("../models/figuremodel")

/* GET home page. */
router.get('/', async (req, res) => {
  var figures = await figuremodel.find();
  var robots = await robotmodel.find();
  console.log(figures);
  res.render('customer/index', { 
     figures: figures,
     robots: robots,
   });
})
module.exports = router;