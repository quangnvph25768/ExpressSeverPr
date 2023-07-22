var fs = require('fs');
const myMD = require('../models/sanpham.model');
const myMDLoai = require('../models/loai.model');


exports.list= async (req,res,next)=>{

    // let dieu_kien_loc = null;
    // if(typeof(req.query.price) != 'undefined'){
    //     // dieu_kien_loc = { price: req.query.price }; // tìm chính xác
    //     dieu_kien_loc = { price: {$gte: req.query.price } }; // >= xxxx

    // }

    var listSP = await myMD.sanPhamModel.find().populate('id_category');
    res.render('sanpham/list',{listSP:listSP});
}

exports.add= async(req,res,next)=>{
    let msg = '';
    //lấy ds thể loại đưa lên form
    let listTLoai = await myMDLoai.loaiModel.find();

    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
       
        // ghi vào CSDL
        try {
            let objSP = new myMD.sanPhamModel();
            objSP.name = req.body.name;
            objSP.price = req.body.price;
            objSP.description = req.body.description;
            objSP.id_category = req.body.category;
    

            await objSP.save();
            console.log(new_sp);
            msg = 'Thêm mới thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }
    }

    res.render('sanpham/add',{listTLoai:listTLoai,msg:msg})
}

exports.editSanPham = async (req,res,next)=>{
    let msg = '';
    let idsp = req.params.idsp;
    // lấy thông tin sản phẩm để sửa, tự thêm khối truy catch để bắt lỗi. 
    let objSP = await myMD.sanPhamModel.findById(idsp);
    let listTL = await myMDLoai.loaiModel.find();

    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
        let objSP = new myMD.sanPhamModel();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        objSP.id_category = req.body.category;

        objSP._id = idsp;// thêm cho chức năng sửa
        // ghi vào CSDL
        try {
            // let new_sp = await objSP.save();
            // console.log(new_sp);
            // msg = 'Thêm mới thành công';

            await myMD.sanPhamModel.findByIdAndUpdate(idsp, objSP);
            msg = 'Đã cập nhật thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }

    }

    res.render('sanpham/edit',{msg: msg, objSP: objSP, listTL:listTL});
}

exports.deleteSp = async (req, res, next) => {
  
    var id =req.params.idsp
    console.log(id);
      try{
        await myMD.sanPhamModel.findByIdAndDelete(id);
        console.log("xoá thành công");
        return res.redirect('/')
      }catch(error){
    console.log(error);
    
      }
    
    };