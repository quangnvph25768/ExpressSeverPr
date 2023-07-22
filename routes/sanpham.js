var express=require('express')
var router = express.Router();
var spCtrl = require('../controllers/sanpham_controller');
var check_login = require('../middleware/check_login');
router.get('/',check_login.yeu_cau_dang_nhap,spCtrl.list);
router.get('/add',spCtrl.add);
router.post('/add',spCtrl.add);

router.get('/edit/:idsp', spCtrl.editSanPham);
router.post('/edit/:idsp', spCtrl.editSanPham);

router.get('/delete/:idsp', spCtrl.deleteSp);
router.post('/delete/:idsp', spCtrl.deleteSp);

module.exports=router;