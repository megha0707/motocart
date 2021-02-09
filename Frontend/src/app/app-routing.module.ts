import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import  { BookbikeComponent } from './bookbike/bookbike.component'
import {LoginComponent} from './login/login.component';
import {CarComponent} from './car/car.component';
import {BikeComponent} from './bike/bike.component';
import {SignupComponent} from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {CarsComponent  } from "./cars/cars.component";
import { UpdateCarComponent } from './update-car/update-car.component';
import { NewcarComponent } from './newcar/newcar.component';
import { BikesComponent } from './bikes/bikes.component';
import { NewbikeComponent } from './newbike/newbike.component';
import { UpdateBikeComponent } from './update-bike/update-bike.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
 import {BookbikedetailComponent} from './bookbikedetail/bookbikedetail.component';
 import {BookcarComponent} from './bookcar/bookcar.component';
 import {BookcardetailComponent } from './bookcardetail/bookcardetail.component';
 import {DealerloginComponent} from './dealerlogin/dealerlogin.component';
 import {AddfeedbackComponent} from './addfeedback/addfeedback.component';
 import {ViewfeedbackComponent} from './viewfeedback/viewfeedback.component';
 import {BikedealerComponent} from  './bikedealer/bikedealer.component';
 import {EmailComponent }  from './email/email.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: BikesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dealerlogin',
    component: DealerloginComponent
  },
  {
    path: 'bikedealerlogin',
    component: BikedealerComponent
  },
  {
    path: 'addfeedback',
    component: AddfeedbackComponent
  },
  {
    path: 'feedbackdetails',
    component: ViewfeedbackComponent
  },
  {
    path: 'email',
    component: EmailComponent 
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewbikeComponent,
},
{
  path:'update',
  component:UpdateBikeComponent
},
{
  path:'bike',
  component:BikeComponent
},
{
  path:'bookbike',
  component:BookbikeComponent
},
{
  path:'bikedetails',
  component:BookbikedetailComponent
},
{
  path:'bookcar',
  component:BookcarComponent
},
{
  path:'cardetails',
  component:BookcardetailComponent
},
{
  path:'home',
  component:WelcomeComponent
},
{
  path: '',
  redirectTo: '/authors',
  pathMatch: 'full'
},
{
  path: 'authors',
  component: CarsComponent
},
{
  path:'car',
  component:CarComponent
},
{
  path:'updateauthor',
  component:UpdateCarComponent
},
{path:'addauthor', 
   canActivate: [AuthGuard],
  component: NewcarComponent,
},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
