const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@meghafiles.hithu.mongodb.net/MOTOAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookcarSchema = new Schema({
  bookid1:String,
    bookName1 : String,
    bookadd1: String,
    bookcontact1 :String,

    bookemail1: String,
    bookdate1: String,
    bookdrive1: String
});

var Bookcardata = mongoose.model('bookcar', NewBookcarSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookcardata;