//  Mongoose to interact with MongoDB
const mongoose = require('mongoose');

// Connecting to the MongoDB database named 'mongopractice' on the local server
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

// Defining a schema for the 'user' collection with three fields: name, username, and email
const userschema = mongoose.Schema({
    name: String,     // User's name
    username: String, // User's unique username
    email: String     // User's email address
});

// Exporting the 'user' model based on the defined schema for use in other files
module.exports = mongoose.model("user", userschema);
