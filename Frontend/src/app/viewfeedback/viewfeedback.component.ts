import { Component, OnInit } from '@angular/core';
import { BikeserviceService } from '../bikeservice.service';

import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  feedbacks=[{
    feedbackid:'',
    feedbackName:'',
    feedbackadd: '',
    feedbackrating: '',
  
  }]
  constructor(private router:Router,private bikeserviceService:BikeserviceService) { }

  ngOnInit(): void {
    this.bikeserviceService.getFeedbacks().subscribe((data)=>{
      this.feedbacks=JSON.parse(JSON.stringify(data));
  })
  }

}
