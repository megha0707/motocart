import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={uname:'',
  password:''}

  constructor(private _auth: AuthService,
              private _router:Router,private fb:FormBuilder) { }
            
          
 
  // ngOnInit() {
  // }

  loginUser () {
    if (this.user.uname=='' && this.user.password==''){
      alert("please fill all the fields");
      this._router.navigate(['/login']);
    }
    else{
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
       localStorage.setItem("userType",'user');
        alert(" User Login success ");
        this._router.navigate(['/products'])
      },
      err => {
        console.log(err);
        // ///////////////////////////////////////////
      
        alert(" Invalid credentials!Please try again");
        this._router.navigate(['/login'])
      }
    ) }
  }
  
  ngOnInit() {
  }
   
 
}
