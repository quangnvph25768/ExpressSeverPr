var express = require('express');
var router = express.Router();
var api = require('../controllers/API/sanPham_api');


router.get('/pr', api.ListPr);

router.get('/add-pr', api.AddSanPham);
router.post('/add-pr', api.AddSanPham);

module.exports = router;