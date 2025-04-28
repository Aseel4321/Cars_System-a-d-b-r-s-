import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

import { AcceptComponent } from '../components/accept/accept.component';

import { HeaderComponent } from '../components/header/header.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { ModelsComponent } from '../components/models/models.component';
import { SiderComponent } from '../components/sider/sider.component';
import { ServesService } from '../serves.service';
import { ClientComponent } from '../components/client/client.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
  AcceptComponent,ClientComponent,ModelsComponent,HeaderComponent,
    HomepageComponent,SiderComponent ],  // تضمين المكون الرئيسي
  imports: [BrowserModule,CommonModule,FormsModule,AppRoutingModule,
    HttpClientModule,
  ] , 
  exports:[AcceptComponent,ClientComponent,ModelsComponent,HeaderComponent,
    HomepageComponent,SiderComponent ] ,   // تضمين الوحدة الخاصة بالمتصفح
  providers: [HttpClient, {provide:ServesService,useClass:ServesService}],                 // مزودات إذا لزم الأمر
  bootstrap: [AppComponent]      // تحديد المكون الذي سيتم تحميله عند بدء التطبيق
})
export class ModuleAdminModule { }
