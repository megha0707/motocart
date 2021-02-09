import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';


import { SignupComponent } from './signup/signup.component';
import { SignupserviceService } from './signupservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsComponent } from './cars/cars.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { NewcarComponent } from './newcar/newcar.component';
import { CarserviceService } from './carservice.service';
import { BikesComponent } from './bikes/bikes.component';
import { NewbikeComponent } from './newbike/newbike.component';
import { UpdateBikeComponent } from './update-bike/update-bike.component'
import { BikeserviceService } from './bikeservice.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WelcomeComponent } from './welcome/welcome.component';
import { BikeComponent } from './bike/bike.component';
import { CarComponent } from './car/car.component';
import { BookbikeComponent } from './bookbike/bookbike.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookbikedetailComponent } from './bookbikedetail/bookbikedetail.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { BookcardetailComponent } from './bookcardetail/bookcardetail.component';
import { DealerloginComponent } from './dealerlogin/dealerlogin.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { BikedealerComponent } from './bikedealer/bikedealer.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
  
  
    SignupComponent,
    
    CarsComponent,
    UpdateCarComponent,
    NewcarComponent,
    BikesComponent,
    NewbikeComponent,
    UpdateBikeComponent,
    WelcomeComponent,
    BikeComponent,
    CarComponent,
    BookbikeComponent,
    AdminloginComponent,
    BookbikedetailComponent,
    BookcarComponent,
    BookcardetailComponent,
    DealerloginComponent,
    AddfeedbackComponent,
    ViewfeedbackComponent,
    BikedealerComponent,
    EmailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
   MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService,AuthGuard,CarserviceService,BikeserviceService,SignupserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
