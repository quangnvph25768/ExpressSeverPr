var myMdSanPham = require('../../models/sanpham.model');

//lấy danh sách
exports.ListPr = async (req, res, next) => {
    try {
        let list = await myMdSanPham.sanPhamModel.find();
        if (list) {
            return res.status(200).json({ data: list, msg: 'Lấy dữ liệu thành công' });
        } else {
            return res.status(204).json({ msg: 'Không có dữ liệu' });
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}  

exports.AddSanPham = async(req, res,next)=>{
    try {
    const { name, price, description,id_category } = req.body;
    let objSP = new myMD.sanPhamModel();
            objSP.name = req.body.name;
            objSP.price = req.body.price;
            objSP.description = req.body.description;
            objSP.id_category = req.body.category;
    
    const savedProduct = await objSP.save();
    res.status(201).json(savedProduct); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}