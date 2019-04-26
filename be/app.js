var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback')
const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors()) // api위에서 cors를 사용하겠다고 선언
// url /api로 접근시 처리
app.use('/api', require('./routes/api'))

//fe의 yarn build 이후 생성되는 dist 폴더를 public 대신 설정하여
// BackEnd와 FrontEnd를 연결한다.
//app.use(express.static(path.join(__dirname, 'public')));
console.log("console : " + path.join(__dirname, '..', 'fe', 'dist'));
app.use(history())
app.use(express.static(path.join(__dirname, '..', 'fe', 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({msg:err.message})
});

module.exports = app;
