const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const userschema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});

module.exports = mongoose.model("user", userschema);
