import { Component, OnInit } from '@angular/core';
import { BikeserviceService } from '../bikeservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  
  productItem={
    //  productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    //  description:'',
    price:'',
    starRating:'',
    imageUrl:''}
  constructor(private router:Router,private bikeserviceService:BikeserviceService ,public _auth:AuthService) { }
  userType=localStorage.getItem("userType");
  ngOnInit(): void {let productId = localStorage.getItem("editProductId");
  this.bikeserviceService.getProduct(productId).subscribe((data)=>{
    this.productItem=JSON.parse(JSON.stringify(data));
  })
}

logoutUser()
{
  localStorage.removeItem('token')
  this.router.navigate(['/products'])
}
loggedUser()
{
this.router.navigate(['/add'])
}
bookbike(){
  this.router.navigate(['/bookbike'])
}
}
