const express = require('express');
const ProductData = require('./src/model/Productdata');
const AuthorData=require('./src/model/Authordata');
const SignupData=require('./src/model/Signupdata');
const BookbikeData=require('./src/model/Bookbikedata');
const BookcarData=require('./src/model/Bookcardata');
const FeedbackData=require('./src/model/Feedbackdata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
const nodemailer = require("nodemailer");
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';
username2='dealer';
password2='1234';
username3='bikedealer';
password3='1234';
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//////////////////////////////////////////////////////////

app.post('/addfeedback',function(req,res){
  console.log(req.body);
  var feedback ={
    feedbackid:req.body.feedback.feedbackid,
    feedbackName : req.body.feedback.feedbackName,
    feedbackadd:req.body.feedback.feedbackadd,
    feedbackrating :req.body.feedback.feedbackrating,
   
  }
  var feedback = new FeedbackData(feedback);
  feedback.save();
  });

app.post('/bookbike',function(req,res){
console.log(req.body);
var bookbike ={
  bookid:req.body.bookbike.bookid,
  bookName : req.body.bookbike.bookName,
  bookadd:req.body.bookbike.bookadd,
  bookcontact :req.body.bookbike.bookcontact,
   bookemail: req.body.bookbike.bookemail,
  bookdate:req.body.bookbike.bookdate,
  bookdrive:req.body.bookbike.bookdrive
}
var bookbike = new BookbikeData(bookbike);
bookbike.save();
});
//
app.post('/bookcar',function(req,res){
  console.log(req.body);
  var bookcar ={
    bookid1:req.body.bookcar.bookid1,
    bookName1 : req.body.bookcar.bookName1,
    bookadd1:req.body.bookcar.bookadd1,
    bookcontact1 :req.body.bookcar.bookcontact1,
  
    bookemail1: req.body.bookcar.bookemail1,
    bookdate1:req.body.bookcar.bookdate1,
    bookdrive1:req.body.bookcar.bookdrive1
  }
  var bookcar = new BookcarData(bookcar);
  bookcar.save();
  });
app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var product = {       
        // productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        // description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
   }       
   var product = new ProductData(product);
   product.save();
});

app.post('/insertauthor',verifyToken,function(req,res){
   
  console.log(req.body);
  
  var author = {       
      // productId : req.body.product.productId,
      authorName : req.body.author.authorName,
      authorCode : req.body.author.authorCode,
      genre : req.body.author.genre,
      description : req.body.author.description,
      works: req.body.author.works,
      country : req.body.author.country,
      imageUrl : req.body.author.imageUrl,
 }       
 var author = new AuthorData(author);
 author.save();
});
/////////////////////////////////////////////////////////////
app.get('/bikedetails',function(req,res){
    
  BookbikeData.find()
              .then(function(bookbikes){
                  res.send(bookbikes);
              });
});
///////////////////////////
app.get('/cardetails',function(req,res){
    
  BookcarData.find()
              .then(function(bookcars){
                  res.send(bookcars);
              });
});
app.get('/feedbackdetails',function(req,res){
    
  FeedbackData.find()
              .then(function(feedbacks){
                  res.send(feedbacks);
              });
});
app.get('/products',function(req,res){
    
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});
app.get('/authors',function(req,res){
    
  AuthorData.find()
              .then(function(authors){
                  res.send(authors);
              });
});

app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    ProductData.findOne({"_id":id})
    .then((product)=>{
        res.send(product);
    });
})
app.post('/login',function(req,res){
  console.log(req.body);
let username1=req.body.uname;
let password1=req.body.password;
  SignupData.findOne({username:username1})
  .then(function(signup){
          
  
    if(signup.password == password1)
     {
   
     console.log('Valid User!');
     let payload = {subject: username1 + password1};
     let token = jwt.sign(payload,'secretKey');
     res.status(200).send({token});
      }
      else{
        res.status(401).send('Invalid Credentials');
        }
})
.catch( ()=> {

        res.status(401).send('User not found! Please SIGN UP!');
});
})

  
app.post('/adminlogin', (req, res) => {
    let userData = req.body;
    console.log(req.body);
    
        if (username !== userData.uname) {
          res.status(401).send('Invalid Username')
         
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
         
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
    app.post('/dealerlogin', (req, res) => {
      let userData1 = req.body;
     
      console.log(req.body);
          if (username2 !== userData1.uname) {
            res.status(401).send('Invalid Username')
           
          } else 
          if ( password2 !== userData1.password) {
            res.status(401).send('Invalid Password')
           
          } else {
            let payload = {subject: username2+password2}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
          }
        
      })
      app.post('/bikedealerlogin', (req, res) => {
        let userData2 = req.body;
       
        console.log(req.body);
            if (username3 !== userData2.uname) {
              res.status(401).send('Invalid Username')
             
            } else 
            if ( password3 !== userData2.password) {
              res.status(401).send('Invalid Password')
             
            } else {
              let payload = {subject: username3+password3}
              let token = jwt.sign(payload, 'secretKey')
              res.status(200).send({token})
            }
          
        })
    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      // productId= req.body.productId,
      productName = req.body.productName,
      productCode = req.body.productCode,
      releaseDate = req.body.releaseDate,
      // description = req.body.description,
      price = req.body.price,
      starRating = req.body.starRating,
      imageUrl = req.body.imageUrl
     ProductData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "productName":productName,
                                  "productCode":productCode,
                                  "releaseDate":releaseDate,
                                  // "description":description,
                                  "price":price,
                                  "starRating":starRating,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
app.get('/author/:id',  (req, res) => {
  
    const id = req.params.id;
      AuthorData.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
    })
    app.put('/updateauthor',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      // productId= req.body.productId,
      authorName = req.body.authorName,
      authorCode = req.body.authorCode,
      genre = req.body.genre,
      description = req.body.description,
      works = req.body.works,
      country = req.body.country,
      imageUrl = req.body.imageUrl
     AuthorData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "authorName":authorName,
                                  "authorCode":authorCode,
                                  "genre":genre,
                                  // "description":description,
                                  "works":works,
                                  "country":country,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
    })
    
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     ProductData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
   app.delete('/removeauthor/:id',(req,res)=>{
  
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
   })


// sigup data

app.post('/signup',function(req,res){
   console.log(req.body);

  var signup = {
    name:  req.body.signup.name,
    
    email: req.body.signup.email,
    username:  req.body.signup.username,
    password :req.body.signup.password,
    confirmPassword:req.body.signup.confirmPassword,
  }  
 var signup = new SignupData(signup);
 signup.save();
});
///////////////////////////////////////////////////
app.post('/email',function(req,res){
  console.log(req.body);
  console.log("email"+req.body.email);
  mail=req.body.email;
  console.log("matter"+req.body.subject);
  sub=req.body.subject;
  console.log("matter"+req.body.matter);
  content=req.body.matter;
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      
      user: req.body.mail,
      pass: req.body.pass
      }
    });
    
    var mailOptions = {
      
      from: req.body.mail,
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.matter
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
})
app.listen(3000, function(){
  console.log('listening to port 3000');
});

