import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  authorItem={
    //  productId :'',
    authorName:'',
    authorCode:'',
    genre:'',
    description:'',
    works:'',
    country:'',
    imageUrl:''}
  constructor(private router:Router,private carserviceService:CarserviceService,public _auth:AuthService) { }
  userType=localStorage.getItem("userType");
  ngOnInit(): void {let authorId = localStorage.getItem("editAuthorId");
  this.carserviceService.getAuthor(authorId).subscribe((data)=>{
    this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this.router.navigate(['/authors'])
  }
  loggedUser()
  {
  this.router.navigate(['/addauthor'])
  }
  bookcar(){
    this.router.navigate(['/bookcar'])
  }
}
