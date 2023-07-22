var db = require('./db');
var loaiSchema = new db.mongoose.Schema(
    {
        name: {type:String, require:true},
        
    },{collection:'tb_category'}
);

let loaiModel = db.mongoose.model('loaiModel',loaiSchema);
module.exports={loaiModel};