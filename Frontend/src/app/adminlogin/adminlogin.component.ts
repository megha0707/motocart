import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user={uname:'',
  password:''}
  constructor(private _auth: AuthService,
    private _router:Router,private fb:FormBuilder) { }
    loginAdmin () {
      if (this.user.uname=='' && this.user.password==''){
        alert("please fill all the fields");
        this._router.navigate(['/login']);
      }
      else{
      this._auth.loginAdmin(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
           localStorage.setItem("userType",'admin')
          alert(" Admin Login success ");
          this._router.navigate(['/products'])
        },
        err => {
          console.log(err);
          // ///////////////////////////////////////////
        
          alert("oh Invalid credentials!Please try again");
          this._router.navigate(['/adminlogin'])
        }
      ) }
    }
  ngOnInit(): void {
  }

}
