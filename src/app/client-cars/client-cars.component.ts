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
  constructor(private route: ActivatedRoute,private Serves:ServesService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');   
  }
  list(){
     this.filtered = this.Serves.list_cars.filter(num => num.Client_id === Number(this.id));
     return this.filtered;
  }
}

