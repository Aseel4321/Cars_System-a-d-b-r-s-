import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable(

)
export class ServesService {
  
    
  
 user_name="Aseel ghaleb";
  list_yess:any=[];
  list_cars:cars[]=[{id:34563,Name:"DDDDD",Model_id:44444,Client_id:11111},{id:3463,Name:"DDDD",Model_id:4444,Client_id:4324},{id:3473,Name:"ggg",Model_id:44444,Client_id:11111}]
  list_yes:Client_Entity[]=[]
  list_add:car_add[]=[];
  list:Client_Entity[]=[{id:11111,Name:'aseel', Phone:234563,Email:"ww@fffff",
    Address:"ssssss",Aproval_Status:'aaaaaaa',
 
 },{id:55435,Name:'a3eel', Phone:2345633,Email:"ww@ffff3f",
   Address:"sssss3s",Aproval_Status:'aaa3aaaa',
 
 }];
  constructor(private http:HttpClient) {

   }
 get_user():Observable<any>{
return this.http.get('http://localhost:3000/users');
 }
 get_cars():Observable<any>{
  return this.http.get('http://localhost:3000/cars');
   }
 get_accept():Observable<any>{
  return this.http.get('http://localhost:3000/accept');
   }
 post_accept(data:any):Observable<any>{
  return this.http.post('http://localhost:3000/accept',data);
   }
   get_model():Observable<any>{
    return this.http.get('http://localhost:3000/car_model');
     }
 POSTT(data:any):Observable<any>{
  return this.http.post('http://localhost:3000/locations',data);
   }
   add_model(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/car_model',data);
     }
   
   dalet(dat:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/locations`+`/`+dat);
     }
    
     dalete_users(dat:any):Observable<any>{
      return this.http.delete(`http://localhost:3000/users`+`/`+dat);
       }
       dalete_model(dat:any):Observable<any>{
        return this.http.delete(`http://localhost:3000/car_model`+`/`+dat);
         }
     upd(dat:any):Observable<any>{
      return this.http.patch(`http://localhost:3000/locations`+`/`+8,dat);
       } 
}
interface car_add{
  Name:string;
  Model:any;
  Company:string
}
interface Client_Entity{
  id:number;
  Name:string;
  Phone:number;
  Email:string;
  Address:string;
  Aproval_Status:string
}

interface cars{
  id:number;
  Name:string;
  Model_id:number;
  Client_id:number;
}