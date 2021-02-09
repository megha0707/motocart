import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  Admin={
    email:'',
    subject:'',
    matter:'',
    pass:'',
    mail:''
  }
  constructor(public _auth:AuthService,private router:Router) { }
  emailSend(){
    console.log(this.Admin)
    this._auth.emailSend(this.Admin)
    
    console.log("called");
    alert("Confirmation email is send to "+this.Admin.email+"!!");
    // this.errorval=true;
    this.router.navigate(['/adoptpet']);

  }
  ngOnInit(): void {
  }

}
