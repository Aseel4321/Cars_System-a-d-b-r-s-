import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServesService } from '../../serves.service';

@Component({
  selector: 'app-add-model',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-model.component.html',
  styleUrl: './add-model.component.css'
})
export class AddModelComponent {
  constructor(private Serves:ServesService,private router: Router,private http:HttpClient){}

  carManufacturers: CarManufacturer[] = [
    { value: '', label: '-- Select Manufacturer --' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'kia', label: 'Kia' },
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes-Benz' },
    { value: 'audi', label: 'Audi' },
    { value: 'ford', label: 'Ford' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'mazda', label: 'Mazda' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'lexus', label: 'Lexus' },
    { value: 'tesla', label: 'Tesla' },
  ];
  selectedCar: string = '';
  carOptions: CarOption[] = [
    { value: '', label: '-- اختر السيارة --' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'ford', label: 'Ford' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'kia', label: 'Kia' },
  ];
  selectedManufacturer: string = '';
  selectedModel: string = '';
  carModelOptions: CarModelOption[] = [
    { value: '', label: '-- carModelOptions --' },
    { value: 'toyota-corolla', label: 'Toyota Corolla' },
    { value: 'honda-civic', label: 'Honda Civic' },
    { value: 'ford-focus', label: 'Ford Focus' },
    { value: 'nissan-altima', label: 'Nissan Altima' },
    { value: 'chevrolet-malibu', label: 'Chevrolet Malibu' },
    { value: 'bmw-3-series', label: 'BMW 3 Series' },
    { value: 'mercedes-c-class', label: 'Mercedes C-Class' },
    { value: 'audi-a4', label: 'Audi A4' },
  ];

name='';
model='';
company='';
ok(){
  this.Serves.add_model({id:"1",Name:this.selectedModel,Company:this.selectedManufacturer}).subscribe((d:any)=>{console.log(d)},(e:any)=>{console.log(e)});
 //this.Serves.list_add.unshift({Name:this.name,Model:this.model,Company:this.company});
 console.log(this.Serves.list_add.length);
}
}
 interface CarOption {
    value: string;
    label: string;
  } 
  interface CarModelOption {
    value: string;
    label: string;
  }
  interface CarManufacturer {
    value: string;
    label: string;
  }