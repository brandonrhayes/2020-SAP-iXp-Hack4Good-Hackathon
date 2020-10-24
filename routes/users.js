var express = require('express');
var router = express.Router();

const db = require('./db')
const dbCtrl = require('./dbCtrl');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:id', dbCtrl.getUserData)
router.get('/score/:id', dbCtrl.getScore)
// router.put('/score/:id', dbCtrl.addScore)

router.post('/score/:id', dbCtrl.addScore);

module.exports = router;
