var express = require('express');
var router = express.Router();
var rooms = require('../rooms.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(rooms)
});
module.exports = router;
