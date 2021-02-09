import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-bikedealer',
  templateUrl: './bikedealer.component.html',
  styleUrls: ['./bikedealer.component.css']
})
export class BikedealerComponent implements OnInit {
  user={uname:'',
  password:''}
  constructor(private _auth: AuthService,
    private _router:Router,private fb:FormBuilder) { }
    loginbikeDealer () {
      if (this.user.uname=='' && this.user.password==''){
        alert("please fill all the fields");
        this._router.navigate(['/dealerlogin']);
      }
      else{
      this._auth.loginbikeDealer(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
           localStorage.setItem("userType",'bikedealer')
          alert("Bike Dealer Login success ");
          this._router.navigate(['/products'])
        },
        err => {
          console.log(err);
          // ///////////////////////////////////////////
        
          alert("Invalid credentials!Please try again");
          this._router.navigate(['/bikedealerlogin'])
        }
      ) }
    }
  ngOnInit(): void {
  }

}
