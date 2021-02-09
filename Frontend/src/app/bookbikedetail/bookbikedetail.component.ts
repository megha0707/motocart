import { Component, OnInit } from '@angular/core';
import { BikeserviceService } from '../bikeservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bookbikedetail',
  templateUrl: './bookbikedetail.component.html',
  styleUrls: ['./bookbikedetail.component.css']
})
export class BookbikedetailComponent implements OnInit {
bookbikes=[{
  bookid:'',
  bookName:'',
  bookadd: '',
  bookcontact: '',
  bookemail:'',
  bookdate:'',
  bookdrive:''
}]
  constructor(private router:Router,private bikeserviceService:BikeserviceService ,public _auth:AuthService) { }
  userType=localStorage.getItem("userType");
  ngOnInit(): void {
    this.bikeserviceService.getBikes().subscribe((data)=>{
      this.bookbikes=JSON.parse(JSON.stringify(data));
  })
  }
  bookbikemail(){
    this.router.navigate(['/email'])
  }
}
