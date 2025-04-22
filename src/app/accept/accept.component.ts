import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ServesService } from '../serves.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accept',
standalone:false,
  templateUrl: './accept.component.html',
  styleUrl: './accept.component.css'
}) 
export class AcceptComponent implements OnInit{list:any=[];
 v1:any;
  constructor(private Serves:ServesService,private router: Router,private http:HttpClient){}
  ngOnInit(): void {
    this.Serves.get_user().subscribe((d:any)=>{this.list=d;
      
      console.log(d)},(e:any)=>{console.log(e)});

    
  
  }
  
  ok(){
    this.router.navigate(['/cli']);

  }
  ok1(){
    this.router.navigate(['/add']);

  }
  ok2(){
    this.router.navigate(['/models']);

  }
yes(i:any){let i1=0;
  i1=this.list[i].id;
  this.list[i].Aproval_Status='yes';
  this.Serves.post_accept(this.list[i]).subscribe((d:any)=>{
  console.log(d)},(e:any)=>{console.log(e)})
  this.list.splice(i,1);
  this.Serves.dalete_users(i1).subscribe((d:any)=>{
    console.log(d)},(e:any)=>{console.log(e)})

  
//this.Serves.list_yes.unshift(this.Serves.list[i]);
//this.Serves.list.splice(i, 1);
}
no(i:any){let i1=0;
  i1=this.list[i].id;
  this.Serves. dalete_users(i1).subscribe((d:any)=>{
  console.log(d)},(e:any)=>{console.log(e)})
  this.list.splice(i,1);
  
  }
}
