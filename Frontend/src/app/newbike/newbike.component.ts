import { Component, OnInit } from '@angular/core';
import { IBike } from '../bikemodel';
import { BikeserviceService } from '../bikeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newbike',
  templateUrl: './newbike.component.html',
  styleUrls: ['./newbike.component.css']
})
export class NewbikeComponent implements OnInit {

  constructor(private bikeserviceService: BikeserviceService,private router: Router) { }
  productItem= {
    //  productId :'',
     productName:'',
     productCode:'',
     releaseDate:'',
    //  description:'',
     price:'',
     starRating:'',
     imageUrl:''}
  ngOnInit(): void {

  }
 AddProduct()
  { 
    if(this.productItem.productName=='' || this.productItem.releaseDate=='' || this.productItem.price=='' || this.productItem.imageUrl=='') {
    alert("Please fill all the  fields"); }
    else{
    this.bikeserviceService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/products']);
  }
}
}
