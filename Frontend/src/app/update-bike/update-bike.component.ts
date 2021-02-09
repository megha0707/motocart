import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeserviceService } from '../bikeservice.service';
@Component({
  selector: 'app-update-bike',
  templateUrl: './update-bike.component.html',
  styleUrls: ['./update-bike.component.css']
})
export class UpdateBikeComponent implements OnInit {
  productItem= {
    // productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    // description:'',
    price:'',
    starRating:'',
    imageUrl:''}
  constructor(private bikeserviceService: BikeserviceService,private router: Router) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.bikeserviceService.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.bikeserviceService.editProduct(this.productItem);   
    alert("Success");
    this.router.navigate(['products']);
  }

}

