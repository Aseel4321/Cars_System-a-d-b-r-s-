import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServesService } from '../serves.service';

@Component({
  selector: 'app-add-model',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-model.component.html',
  styleUrl: './add-model.component.css'
})
export class AddModelComponent {
  constructor(private Serves:ServesService) {}
name='';
model='';
company='';
ok(){
 this.Serves.list_add.unshift({Name:this.name,Model:this.model,Company:this.company});
 console.log(this.Serves.list_add.length);
}
}
