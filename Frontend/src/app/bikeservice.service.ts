import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BikeserviceService {
  item= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
    item1={
      bookid:'',
      bookName:'',
      bookadd: '',
      bookcontact: '',
      bookemail:'',
      bookdate:'',
      bookdrive:''
    }
    item2={
      bookid1:'',
      bookName1:'',
      bookadd1: '',
      bookcontact1: '',
      bookemail1:'',
      bookdate1:'',
      bookdrive1:''
    }
    item3={
      bookid1:'',
      bookName1:'',
      bookadd1: '',
      bookcontact1: '',
    
    }
  constructor(private http:HttpClient) { }
  getProduct(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  getBikes(){
    return this.http.get("http://localhost:3000/bikedetails");
  }
  getCars(){
    return this.http.get("http://localhost:3000/cardetails");
  }
  getFeedbacks(){
    return this.http.get("http://localhost:3000/feedbackdetails");
  }
newBike(item1:any){
  return this.http.post("http://localhost:3000/bookbike",{"bookbike":item1})
  .subscribe(data =>{console.log(data)})
}
newCar(item2:any){
  return this.http.post("http://localhost:3000/bookcar",{"bookcar":item2})
  .subscribe(data =>{console.log(data)})
}
newFeedback(item3:any){
  return this.http.post("http://localhost:3000/addfeedback",{"feedback":item3})
  .subscribe(data =>{console.log(data)})
}
  newProduct(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  
}
