var db = require('./db');
var userSchema = new db.mongoose.Schema(
    {
        fullName: { type: String, require: true },
        username: { type: String, require: true },
        passWd: { type: String, require: true },
        email: { type: String, require: true },
        token: {  // trường hợp lưu nhiều token thì phải dùng mảng. Trong demo này sẽ dùng 1 token
            type: String,
            required: false
        }
    }, {
        collection: 'tb_user',
}
);

let userModel = db.mongoose.model('userModel', userSchema);
module.exports = { userModel };