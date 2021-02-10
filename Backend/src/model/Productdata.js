const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@meghafiles.hithu.mongodb.net/MOTOAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    // productId : Number,
    productName : String,
    productCode : String,
    releaseDate :String,
    // description : String,
    price : String,
    starRating :String,
    imageUrl : String
});

var Productdata = mongoose.model('product', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;