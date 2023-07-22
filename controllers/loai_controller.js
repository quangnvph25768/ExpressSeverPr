const myMD = require('../models/loai.model')

exports.loai=async(req,res,next)=>{
    var listTL = await myMD.loaiModel.find();
    res.render('loai/loai',{listTL:listTL})
}


exports.addLoai= async(req,res,next)=>{
    let msg = '';
    //lấy ds thể loại đưa lên form
    let listTLoai = await myMD.loaiModel.find();

    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
       
        // ghi vào CSDL
        try {
            let objSP = new myMD.loaiModel();
            objSP.name = req.body.nameCategory;

            await objSP.save();
            console.log(new_sp);
            msg = 'Thêm mới thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }
    }

    res.render('loai/add-loai',{listTLoai:listTLoai,msg:msg})
}

exports.editLoai = async (req,res,next)=>{
    let msg = '';
    let idLoai = req.params.idLoai;
    // lấy thông tin sản phẩm để sửa, tự thêm khối truy catch để bắt lỗi. 
    let objSP = await myMD.loaiModel.findById(idLoai);
   
    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
        let objSP = new myMD.loaiModel();
        objSP.name = req.body.name;
        
        objSP._id = idLoai;// thêm cho chức năng sửa
        // ghi vào CSDL
        try {
            // let new_sp = await objSP.save();
            // console.log(new_sp);
            // msg = 'Thêm mới thành công';

            await myMD.loaiModel.findByIdAndUpdate(idLoai, objSP);
            msg = 'Đã cập nhật thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }

    }
   

    res.render('loai/edit-loai',{msg: msg, objSP: objSP});
}

 
exports.deleteLoai = async (req, res, next) => {
  
    var id =req.params.idLoai
    console.log(id);
      try{
        await myMD.loaiModel.findByIdAndDelete(id);
        console.log("xoá thành công");
        return res.redirect('/loai')
      }catch(error){
    console.log(error);
    
      }
    
    };