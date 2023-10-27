var express = require('express');
var router = express.Router();

const robotmodel = require('../models/robotmodel');
router.get('/', async (req, res) => {
   var robots = await robotmodel.find();
   res.render('robot/index', { robots: robots });
})

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   var robot = await robotmodel.findById(id);
   res.render('robot/detail', { robot: robot });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await robotmodel.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/toy');
})

router.get('/add', (req, res) => {
   res.render('robot/add');
})

router.post('/add', async (req, res) => {
   var robot = req.body;
   await robotmodel.create(robot);
   console.log('Add toy succeed !');
   res.redirect('/robot');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var robot = await robotmodel.findById(id);
   res.render('robot/edit', { robot: robot })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var robot = req.body;
   await robotmodel.findByIdAndUpdate(id, robot);
   console.log('Update toy succeed !');
   res.redirect('/robot');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   //relative search
   var robots = await robotmodel.find({ name: new RegExp(keyword, "i") });
   res.render('robot/index', { robots: robots });
})


module.exports = router;