import { Component, OnInit } from '@angular/core';
import { ServesService } from '../serves.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-models',
standalone:false,
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent implements OnInit{
  constructor(private Serves:ServesService) {}
  list:any=[]
  ngOnInit(): void {
    this.Serves.get_model().subscribe((d:any)=>{this.list=d;
      console.log(d)},(e:any)=>{console.log(e)});
  }
  deleteItem(index: number) { 
    const i1=this.list[index].id; 
    this.Serves.dalete_model(i1).subscribe((d:any)=>{
    console.log(d)},(e:any)=>{console.log(e)});
    this.list.splice(index, 1);
  }
}
