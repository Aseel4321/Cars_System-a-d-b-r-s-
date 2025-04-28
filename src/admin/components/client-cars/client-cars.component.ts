import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServesService } from '../../serves.service';
import { CommonModule } from '@angular/common';
import { cars } from '../../model-admin';

@Component({
  selector: 'app-client-cars',
  imports: [CommonModule],
  templateUrl: './client-cars.component.html',
  styleUrl: './client-cars.component.css'
})
export class ClientCarsComponent implements OnInit{
  id: string | null = null;

   filtered:any=[];
   list1:cars[]=[];
  constructor(private route: ActivatedRoute,private Serves:ServesService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.Serves.get_cars().subscribe((d:any)=>{this.list1=d;
      console.log('d');
      console.log(this.id);
    },(e:any)=>{console.log(e)});
  }
  list(){ 
    this.filtered = this.list1.filter(num => num.client_id === Number(this.id));
    
    return this.filtered;
 }
}

