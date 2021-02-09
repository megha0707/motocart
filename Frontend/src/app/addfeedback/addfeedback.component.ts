import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BikeserviceService } from '../bikeservice.service';
@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {
  feedbackItem= {
    feedbackid:'',
    
    feedbackName:'',
    feedbackadd: '',
    feedbackrating: '',
  
  }
  constructor(private bikeserviceService: BikeserviceService,private router: Router) { }
starRating=0
  ngOnInit(): void {
  }
  Feedback(){
    if(this.feedbackItem.feedbackName=='' || this.feedbackItem.feedbackadd=='' || this.feedbackItem.feedbackrating=='' || this.feedbackItem.feedbackid=='') {
      alert("Please fill all the  fields"); }
      else{
        this.bikeserviceService.newFeedback(this.feedbackItem);
        console.log("Called");    
        alert("Success");
        this.router.navigate(['/home']);
      }
    }
}
