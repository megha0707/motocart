const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Products');
const Schema=mongoose.Schema;
const SignupSchema=new Schema({
    name: String,
   
    email: String,
    username:String,
    password:String,
    confirmPassword:String,
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;