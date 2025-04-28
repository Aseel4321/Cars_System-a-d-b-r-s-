export interface car_add{
    Name:string;
    Model:any;
    Company:string
  }
 /*export interface Client_Entity{
    id:number;
    Name:string;
    Phone:number;
    Email:string;
    Address:string;
    Aproval_Status:string
  }*/

  export interface cars{
    id:number;
    name:string;
    model_id:number;
    client_id:number;
  }
  export interface Client_Entity{
    "id":string,
    "fullName": string,
    "email": string,
    "password":string,
    "conferm_password": string,
    "phone":string,
    "registrationDate":string,
    "gender":string,
    "terms": true,
    "country":string,
    "city": string,
    "street": string
  }
  export interface users{
    "id":string,
    "fullName": string,
    "email": string,
    "password":string,
 
  }
  export interface cars_model 
    {
      "id":string,
      "name": string,
      "company":string
    }