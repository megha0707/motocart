import { Component, OnInit } from '@angular/core';
import { BikeserviceService } from '../bikeservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  pageTitle: string = 'Books';
  imageWidth: number = 150;
  imageMargin: number = 70;
  imageHeight: number = 150;
  showImage: boolean = true;
  products=[{
    //  productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    //  description:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  constructor(private router:Router,private bikeserviceService:BikeserviceService ,public _auth:AuthService) { }
   userType=localStorage.getItem("userType");
  ngOnInit(): void {
    this.bikeserviceService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  readProduct(product:any)
    {
      localStorage.setItem("editProductId", product._id.toString());
      this.router.navigate(['bike']);
  
    }
  deleteProduct(product:any)
  {
    this.bikeserviceService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
  

  }
}
