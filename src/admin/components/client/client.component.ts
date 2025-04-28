import { Component, OnInit } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServesService } from '../../serves.service';
import { users } from '../../model-admin';
@Component({
  selector: 'app-client',
  standalone:false,
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  searchText:any='';
  constructor(private Serves:ServesService,private router: Router){}
  list_yes:users[]=[];
  list_yes1:users[]=[];
  ngOnInit(): void {
   this.Serves.get_accept().subscribe((d:any)=>{this.list_yes=d;
    console.log(d);
   },(e:any)=>{console.log(e)});
  }
  ok(i:any){
    this.router.navigate(['h/cars-cli',this.list_yes[i].id,]);}
 list_yes_filtered() {if(this.searchText==''){return this.list_yes;}else{
  return this.list_yes1= this.list_yes.filter(item => item.fullName?.toLowerCase().startsWith(this.searchText?.toLowerCase()));
 }
  console.log(this.searchText);
 
  }
}
