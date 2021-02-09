import { Component, OnInit } from '@angular/core';
import { ICar } from '../carmodel';
import { CarserviceService } from '../carservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css']
})
export class NewcarComponent implements OnInit {

  constructor(private carserviceService:CarserviceService,private router: Router) { }
  authorItem= {
    authorName:'',
    authorCode:'',
    genre:'',
    works:'',
    description:'',
    country:'',
    imageUrl:''}
  ngOnInit(): void {

  }
 AddAuthor()
  {  
    if(this.authorItem.authorName=='' || this.authorItem.genre=='' || this.authorItem.works=='' || this.authorItem.imageUrl=='') {
      alert("Please fill all the  fields"); }
      else{
    this.carserviceService.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['authors']);
  }}
}
