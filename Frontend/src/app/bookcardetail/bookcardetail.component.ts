import { Component, OnInit } from '@angular/core';
import { BikeserviceService } from '../bikeservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bookcardetail',
  templateUrl: './bookcardetail.component.html',
  styleUrls: ['./bookcardetail.component.css']
})
export class BookcardetailComponent implements OnInit {
  bookcars=[{
    bookid1:'',
    bookName1:'',
    bookadd1: '',
    bookcontact1: '',
    bookemail1:'',
    bookdate1:'',
    bookdrive1:''
  }]
  constructor(private router:Router,private bikeserviceService:BikeserviceService ,public _auth:AuthService) { }
  userType=localStorage.getItem("userType");
  ngOnInit(): void {
    this.bikeserviceService.getCars().subscribe((data)=>{
      this.bookcars=JSON.parse(JSON.stringify(data));
  })
  }
  bookcaremail(){
    this.router.navigate(['/email'])
  }
}
