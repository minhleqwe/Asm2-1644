var express = require('express');
var robotmodel = require("../models/robotmodel")
var figuremodel = require("../models/figuremodel")
var router = express.Router();
var express = require('express');
const UserModel = require('../models/usermodel');
var router = express.Router();


router.get('/', async (req, res) => {
   var robots = await robotmodel.find();
   var figures = await figuremodel.find();
   console.log(figures);
   res.render('toy/index', { 
      figures: figures,
      robots: robots,
    });
})
router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   // SELECT * FROM student WHERE id = 'id'
   var toy = await ToyModel.findById(id);
   res.render('toy/detail', { toy: toy });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await ToyModel.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/toy');
})

router.get('/add', (req, res) => {
   res.render('toy/add');
})

router.post('/add', async (req, res) => {
   var description = req.body.description;
   var toy=await robotmodel.create(toy);
   if(description == "robot")
   {
      await robotmodel.create(toy);
   }else if(description == "figure"){
      await figuremodel.create(toy);
   }
   await ToyModel.create(toy);
   console.log('Add toy succeed !');
   res.redirect('/toy');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = await ToyModel.findById(id);
   res.render('toy/edit', { toy: toy })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = req.body;
   await ToyModel.findByIdAndUpdate(id, toy);
   console.log('Update toy succeed !');
   res.redirect('/toy');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   var figures = await figuremodel.find({ name: new RegExp(keyword, "i") });
   var robots = await robotmodel.find({ name: new RegExp(keyword, "i") });
   console.log(figures);
   res.render('toy/index', { 
      figures: figures,
      robots: robots,
    });
})

module.exports = router;