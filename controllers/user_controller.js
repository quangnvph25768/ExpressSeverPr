const myMD = require('../models/user.model');

exports.user= async(req,res,next)=>{
    var listUser = await myMD.userModel.find();
    res.render('user/user',{listUser:listUser});
}

exports.addUser= async(req,res,next)=>{
    let msg = '';
    //lấy ds thể loại đưa lên form
    let listUser = await myMD.userModel.find();

    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
       
        // ghi vào CSDL
        try {
            let objUser = new myMD.userModel();
            objUser.fullName = req.body.fullName;
            objUser.username = req.body.username;
            objUser.passWd = req.body.passWd;
            objUser.email = req.body.email;
            await objUser.save();
            console.log(new_sp);
            msg = 'Thêm mới thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }
    }

    res.render('user/add-user',{listUser:listUser,msg:msg});
}


exports.editUser= async(req,res,next)=>{
    let msg = '';
    //lấy ds thể loại đưa lên form
  
    let idUser = req.params.idUser;
    let objUser = await myMD.userModel.findById(idUser);
    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
       
        // ghi vào CSDL
        let objUser = new myMD.userModel();
            objUser.fullName = req.body.fullName;
            objUser.username = req.body.username;
            objUser.passWd = req.body.passWd;
            objUser.email = req.body.email;

            objUser._id =idUser;
        try {

            await myMD.userModel.findByIdAndUpdate(idUser,objUser);
            
            msg = 'Đã cập nhật thành công';

        } catch (error) {
            msg = 'Lỗi '+ error.message;
            console.log(error);
        }
    }

    res.render('user/edit-user',{objUser:objUser,msg:msg});
}
exports.info=(req,res,next)=>{

    res.render('user/infouser')
}

exports.password=(req,res,next)=>{
    res.render('user/changepass')
}

exports.deleteUser = async (req, res, next) => {
  
    var id =req.params.idUser;
    console.log(id);
      try{
        await myMD.userModel.findByIdAndDelete(id);
        console.log("xoá thành công");
        return res.redirect('/user')
      }catch(error){
    console.log(error);
    
      }
    
    }

    exports.Login = async (req,res,next)=>{
        let msg ='';
        if(req.method=='POST'){
            try {
                let objU = await myMD.userModel.findOne({username:req.body.username});
                console.log(objU);
    
                if(objU!=null){
                    //tồn tại user ==> kiểm tra pass
                    if(objU.passWd==req.body.passWd){
                        //đúng thông tin tài khoản ==> lưu vào session
                        req.session.userLogin = objU;
                        // kiểm tra về trang quản trị
                        return res.redirect('/user');
                    }else{
                        msg='Sai password';
                    }
                }else{
                    msg = 'Không tồn tại tài khoản' + req.body.username;
                }
            } catch (error) {
                msg=error.message;
            }
        }
        res.render('user/Login',{msg:msg})
    }
    
    exports.Reg = async (req,res,next)=>{
        let msg ='';
    
        if(req.method=='POST'){
            console.log(req.body);
            if(req.body.passWd!=req.body.passWd2){
                msg='Xác nhận password không đúng';
                res.render('user/Reg',{msg:msg})
            }
            //nếu có kiểm tra khác thì viết vào đây
            
            try {
                let objU = new myMD.userModel();
                objU.fullName=req.body.fullname;
                objU.username=req.body.username;
                objU.passWd = req.body.passWd;
                objU.email = req.body.email;
    
                await objU.save();
                msg='Đăng kí thành công';
            } catch (error) {
                msg ='Lỗi '+error.message;
            }
        }
    
        res.render('user/Reg',{msg:msg})
    }
    
    exports.Logout = (req,res,next)=>{
        
    }