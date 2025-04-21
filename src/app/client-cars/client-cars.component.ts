import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServesService } from '../serves.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-cars',
  imports: [CommonModule],
  templateUrl: './client-cars.component.html',
  styleUrl: './client-cars.component.css'
})
export class ClientCarsComponent implements OnInit{
  id: string | null = null;

   filtered:any;
   list1:cars[]=[];
  constructor(private route: ActivatedRoute,private Serves:ServesService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.Serves.get_cars().subscribe((d:any)=>{this.list1=d;
      console.log(d)},(e:any)=>{console.log(e)});
  }
  list(){
     this.filtered = this.list1.filter(num => num.Client_id === Number(this.id));
     return this.filtered;
  }
}

interface cars{
  "id":string,
  "Name":string,
  "Model_id":number,
  "Client_id":number
}