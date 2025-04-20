import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AcceptComponent } from './accept/accept.component';
import { ClientComponent } from './client/client.component';
import { routes } from './app.routes';
import { ServesService } from './serves.service';
@Component({
  selector: 'app-root',
standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Cars_Management_System';
  constructor(private loc:ServesService,private router: Router){

  }
  ngOnInit(): void {
//this.loc.gett().subscribe((d:any)=>{console.log(d)},(e:any)=>{console.log(e)})
//this.loc.POSTT(data).subscribe((d:any)=>{console.log(d)},(e:any)=>{console.log(e)})
//this.loc.dalet(6).subscribe((d:any)=>{console.log(d)},(e:any)=>{console.log(e)})

  }
  nav(i:any){
    if(i==0){this.router.navigate(['/accept']);}else if(i==1){  this.router.navigate(['/cli']);
      
    }else if(i==2){  this.router.navigate(['/add']);
}else{ this.router.navigate(['/models']);}
  }
  o(){const data= {
    "id": 24,
    "name": "aseelaseel882000",
    "city": "jordan",
    "state": "IL",
    "photo": "https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
    "availableUnits": 4,
    "wifi": true,
    "laundry": true
}
this.loc.get_user().subscribe((d:any)=>{console.log(d)},(e:any)=>{console.log(e)})}
}
