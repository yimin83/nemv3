var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ msg:'hello', a:'괜찮음'})
})
router.get('/hello', function(req, res, next) {
  res.send({ msg:'hello', a:22222222})
})
router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없음'));
});

module.exports = router;
