const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@meghafiles.hithu.mongodb.net/MOTOAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookbikeSchema = new Schema({
   bookid:String,
    bookName : String,
    bookadd: String,
    bookcontact :String,

    bookemail: String,
    bookdate: String,
    bookdrive: String
});

var Bookbikedata = mongoose.model('bookbike', NewBookbikeSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookbikedata;