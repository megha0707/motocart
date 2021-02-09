import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BikeserviceService } from '../bikeservice.service';


@Component({
  selector: 'app-bookbike',
  templateUrl: './bookbike.component.html',
  styleUrls: ['./bookbike.component.css']
})
export class BookbikeComponent implements OnInit {
  bookItem= {
    bookid:'',
    
    bookName:'',
    bookadd: '',
    bookcontact: '',
    bookemail:'',
    bookdate:'',
    bookdrive:''
  } 
  constructor(private bikeserviceService: BikeserviceService,private router: Router) { }
 
  ngOnInit(): void {
  }
  BookBike(){
    if(this.bookItem.bookName=='' || this.bookItem.bookadd=='' || this.bookItem.bookcontact=='' || this.bookItem.bookemail=='') {
      alert("Please fill all the  fields"); }
      else{
        this.bikeserviceService.newBike(this.bookItem);
        console.log("Called");    
        alert("Success");
        this.router.navigate(['/products']);
      }
    }
  }

