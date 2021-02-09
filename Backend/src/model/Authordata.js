const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Products');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    // productId : Number,
    authorName : String,
    authorCode : String,
    genre : String,
    description : String,
    works: String,
    country:String,
    imageUrl : String
});

var Authordata = mongoose.model('author', NewAuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;