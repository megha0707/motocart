import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../carservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  pageTitle: string = 'Authors';
  imageWidth: number = 150;
  imageHeight: number = 150;
  imageMargin: number = 70;
  showImage: boolean = false;

  authors=[{
    //  productId :'',
    authorName:'',
    authorCode:'',
    genre:'',
    // description:'',
    works:'',
    country:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private carserviceService:CarserviceService,public _auth:AuthService) { }
  userType=localStorage.getItem("userType");
  ngOnInit(): void {
    this.carserviceService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })}
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.carserviceService.deleteAuthor(author._id)
      .subscribe((_data) => {
        this.authors = this.authors.filter(p=> p !== author);
      })
  

  }
  readAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['car']);

  }
  }


