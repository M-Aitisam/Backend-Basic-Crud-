const  mongoose =  require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/crudapp");

const  userSchema =  new mongoose.Schema({
    imgurl :  String,
    email : String,
    name : String
})

module.exports = mongoose.model('User' , userSchema);


