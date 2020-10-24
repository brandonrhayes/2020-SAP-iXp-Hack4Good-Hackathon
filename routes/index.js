var express = require('express');
var router = express.Router();

// mongo db
const db = require('./db')
const dbCtrl = require('./dbCtrl');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/user/:user', dbCtrl.createUser);


module.exports = router;
