const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@meghafiles.hithu.mongodb.net/MOTOAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewFeedbackSchema = new Schema({
   feedbackid:String,
    feedbackName : String,
    feedbackadd: String,
    feedbackrating :String,

  
});

var Feedbackdata = mongoose.model('feedback', NewFeedbackSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Feedbackdata;