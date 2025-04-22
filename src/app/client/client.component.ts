import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';
import { NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client',
  standalone:false,
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  constructor(private Serves:ServesService,private router: Router){}
  list_yes:any;
  ngOnInit(): void {
   this.Serves.get_accept().subscribe((d:any)=>{this.list_yes=d;
    console.log(d);
   },(e:any)=>{console.log(e)});
  }
  ok(i:any){this.router.navigate(['h/cars-cli',i,this.list_yes]);}
}
