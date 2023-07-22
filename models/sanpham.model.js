var db = require('./db');

var sanPhamSchema = new db.mongoose.Schema(
    {
        name: {type:String, require:true},
        description:{type:String, require:false},
        price:{type:Number, require:true},
        id_category: {type: db.mongoose.Schema.Types.ObjectId, ref: 'loaiModel'}
    },{collection:'tb_product'}
);

let sanPhamModel = db.mongoose.model('sanPhamModel',sanPhamSchema);

module.exports={sanPhamModel};
