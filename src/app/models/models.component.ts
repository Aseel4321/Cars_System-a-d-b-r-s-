import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-models',
  imports: [CommonModule],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent implements OnInit{
  constructor(private Serves:ServesService) {}
  list:any=[]
  ngOnInit(): void {
    this.list=this.Serves.list_add;
  }

}
