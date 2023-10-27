var express = require('express');
const UserModel = require('../models/usermodel');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
})

router.post('/', async (req, res) => {
  var login = await UserModel.findOne(
    {
      username: req.body.username,
      password: req.body.password
    }
  )
  if (login) 
    res.redirect('/')
  else
    res.redirect('/');
})

module.exports = router;