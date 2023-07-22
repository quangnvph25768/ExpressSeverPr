var express = require('express');
var router = express.Router();
var api = require('../controllers/API/user_api');
// var midw = require('../middleware/api_auth');

router.get('/user', api.List); // ds u:  /api/users

router.post('/user/login', api.Login); // đăng nhập

router.post('/user/reg', api.Reg); // đăng ký

// router.get('/user/profile', api.Profile); // lấy thông tin user
// router.post('/user/profile', api.Profile); // lấy thông tin user

router.get('/user/logout', api.Logout); // đăng xuất

router.get('/ct', api.ListCt);

module.exports = router;