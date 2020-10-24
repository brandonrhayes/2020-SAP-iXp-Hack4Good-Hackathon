var express = require('express');
var router = express.Router();

// mongo db
const db = require('./db')
const dbCtrl = require('./dbCtrl');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const auth = require('./auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// TODO: fix dbcontroller functions
// router.put('/user/:user', dbCtrl.createUser);
// router.get('/user/:username', dbCtrl.getUser);
// router.get('/moodscore', dbCtrl.getMoodScore)
router.post('/facebooklogin', auth.facebookLogin);

module.exports = router;
