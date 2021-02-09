import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-dealerlogin',
  templateUrl: './dealerlogin.component.html',
  styleUrls: ['./dealerlogin.component.css']
})
export class DealerloginComponent implements OnInit {
  user={uname:'',
  password:''}
  constructor(private _auth: AuthService,
    private _router:Router,private fb:FormBuilder) { }
    loginDealer () {
      if (this.user.uname=='' && this.user.password==''){
        alert("please fill all the fields");
        this._router.navigate(['/dealerlogin']);
      }
      else{
      this._auth.loginDealer(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
           localStorage.setItem("userType",'dealer')
          alert(" Car Dealer Login success ");
          this._router.navigate(['/products'])
        },
        err => {
          console.log(err);
          // ///////////////////////////////////////////
        
          alert(" Invalid credentials!Please try again");
          this._router.navigate(['/dealerlogin'])
        }
      ) }
    }
  ngOnInit(): void {
  }

}
