import { Component } from '@angular/core';
import { ServesService } from '../serves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sider',
  standalone:false,
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.css'
})
export class SiderComponent { constructor(private loc:ServesService,private router: Router){

}  cor=0;
  nav(i:any){this.cor=i;
    if(i==0){this.router.navigate(['h/accept']);}else if(i==1){  this.router.navigate(['h/cli']);
      
    }else if(i==2){  this.router.navigate(['h/add']);
}else{ this.router.navigate(['h/models']);}
  }
  color2(i:any):string{
    if(i==this.cor){return "font-size:25px; margin-bottom: 15px; cursor: pointer;color:white"}
    else if(i==this.cor){return "font-size:25px; margin-bottom: 15px; cursor: pointer;color:white"}else if(i==this.cor){
return "font-size:25px; margin-bottom: 15px; cursor: pointer;color:white"
    }else{return "font-size:25px; margin-bottom: 15px; cursor: pointer;"}
    ;
   
  }
}
