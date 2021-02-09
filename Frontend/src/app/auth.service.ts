import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User} from 'src/app/user'

@Injectable()
export class AuthService {

  
  private _loginUrl = "http://localhost:3000/login";
  
  ///////////////////////////////
  constructor(private http: HttpClient) { }
loginAdmin(user:any){
  return this.http.post<any>("http://localhost:3000/adminlogin",user);
}
loginDealer(user:any){
  return this.http.post<any>("http://localhost:3000/dealerlogin",user);
}
loginbikeDealer(user:any){
  return this.http.post<any>("http://localhost:3000/bikedealerlogin",user);
}
getSignup(signup:User){
  return this.http.post("http://localhost:3000/signup",{"signup":signup})
  
}
emailSend(email:any){
  return this.http.post("http://localhost:3000/email",email)
  .subscribe(data =>{console.log(data)})
}
  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }
////////////////////////////

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}