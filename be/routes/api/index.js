var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
/*router.get('/hello', function(req, res, next) {
  res.send({ msg:'hello', a:1})
})
router.get('/user', function(req, res, next) {
  res.send({ msg:'get user', a:1})
})
router.post('/user', function(req, res, next) {
  res.send({ msg:'post hello', a:1})
})*/
router.use('/test', require('./test'))
router.use('/user', require('./user'))
router.use('/rooms', require('./rooms'))

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없음'));
});

module.exports = router;
