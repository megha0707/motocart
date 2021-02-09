import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from '../carservice.service';
@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  authorItem= {
    // productId :'',
    authorName:'',
    authorCode:'',
    genre:'',
    description:'',
    works:'',
    country:'',
    imageUrl:''}
  constructor(private router:Router,private carserviceService:CarserviceService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.carserviceService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));

})
}
editAuthor()
  {    
    this.carserviceService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}
