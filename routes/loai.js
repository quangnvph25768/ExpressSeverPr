var express = require('express');
var router = express.Router();

var loaiCtrl = require('../controllers/loai_controller')
router.get('/',loaiCtrl.loai);

router.get('/add',loaiCtrl.addLoai);
router.post('/add',loaiCtrl.addLoai);

router.get('/edit/:idLoai',loaiCtrl.editLoai);
router.post('/edit/:idLoai',loaiCtrl.editLoai);


router.get('/delete/:idLoai', loaiCtrl.deleteLoai);
router.post('/delete/:idLoai', loaiCtrl.deleteLoai);

module.exports = router;
