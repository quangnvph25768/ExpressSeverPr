var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user_controller');
var check_login = require('../middleware/check_login');
router.get('/',userCtrl.user);
router.get('/add',userCtrl.addUser);
router.post('/add',userCtrl.addUser);
router.use((req, res, next) => {
    console.log("=======> Đã gọi middlware ===> ", Date.now());
    next();
  });

  router.get("/", check_login.yeu_cau_dang_nhap, function (req, res, next) {
    // danh sách user
    console.log("Hiển thị danh sách user");
  
    // hiển thị user đã login
    console.log(req.session.userLogin);
    res.send(req.session.userLogin);
    res.redirect("/");
  });
router.get('/edit/:idUser',userCtrl.editUser);
router.post('/edit/:idUser',userCtrl.editUser);

router.get('/delete/:idUser', userCtrl.deleteUser);
router.post('/delete/:idUser', userCtrl.deleteUser);

router.get('/changepass',userCtrl.password);
router.get('/info',userCtrl.info);

router.get('/reg',userCtrl.Reg);
router.post('/reg',userCtrl.Reg);

router.get('/login',userCtrl.Login);
router.post('/login',userCtrl.Login);
module.exports = router;
