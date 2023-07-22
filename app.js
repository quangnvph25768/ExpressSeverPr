var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spRouter = require('./routes/sanpham');
var userRouter = require('./routes/users');
var loaiRouter = require('./routes/loai');
var apiAcRouter = require('./routes/api');

var apiSP = require('./routes/api_sanPham');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'bomaychat', // chuỗi ký tự đặc biệt để Session mã hóa, tự viết
  resave:true,
  saveUninitialized:true
 }));

 
app.use('/', spRouter);
app.use('/user', usersRouter);
app.use('/loai',loaiRouter);
app.use('/api', apiAcRouter);
app.use('/api_SP', apiSP);

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

if (req.originalUrl.indexOf('/api') == 0) {
  res.json(
    {
      msg: err.message
    }
  );
} else {
  res.render('error');
}
});
module.exports = app;
