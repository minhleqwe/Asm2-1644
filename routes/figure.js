var express = require('express');
var router = express.Router();

const figuremodel = require('../models/figuremodel');

router.get('/', async (req, res) => {
   var figures = await figuremodel.find();
   res.render('figure/index', { figures: figures });
})


router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   var figure = await figuremodel.findById(id);
   res.render('figure/detail', { figure: figure });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await figuremodel.findByIdAndDelete(id);
   console.log('Delete figure succeed');
   res.redirect('/toy');
})

router.get('/add', (req, res) => {
   res.render('figure/add');
})

router.post('/add', async (req, res) => {
   var figure = req.body;
   await figuremodel.create(figure);
   console.log('Add figure succeed !');
   res.redirect('/figure');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var figure = await figuremodel.findById(id);
   res.render('figure/edit', { figure: figure })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var figure = req.body;
   await figuremodel.findByIdAndUpdate(id, figure);
   console.log('Update figure succeed !');
   res.redirect('/figure');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   var figures = await figuremodel.find({ name: new RegExp(keyword, "i") });
   res.render('figure/index', { figures: figures });
})

module.exports = router;