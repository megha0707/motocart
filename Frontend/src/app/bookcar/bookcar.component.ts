import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BikeserviceService } from '../bikeservice.service';
@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css']
})
export class BookcarComponent implements OnInit {
  bookItem1= {
    bookid1:'',
    bookName1:'',
    bookadd1: '',
    bookcontact1: '',
    bookemail1:'',
    bookdate1:'',
    bookdrive1:''
  } 
  constructor(private bikeserviceService: BikeserviceService,private router: Router) { }

  ngOnInit(): void {
  }

  BookCar(){
    if(this.bookItem1.bookName1=='' || this.bookItem1.bookadd1=='' || this.bookItem1.bookcontact1=='' || this.bookItem1.bookemail1=='') {
      alert("Please fill all the  fields"); }
      else{
        this.bikeserviceService.newCar(this.bookItem1);
        console.log("Called");    
        alert("Success");
        this.router.navigate(['/authors']);
      }
    }
}
