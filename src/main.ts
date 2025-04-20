import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { CommonModule } from '@angular/common';
import { AcceptComponent } from './app/accept/accept.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './app/client/client.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServesService } from './app/serves.service';

@NgModule({
  declarations: [AppComponent,AcceptComponent,ClientComponent],  // تضمين المكون الرئيسي
  imports: [BrowserModule,CommonModule,RouterModule.forRoot(routes),FormsModule,
    HttpClientModule
  ] ,     // تضمين الوحدة الخاصة بالمتصفح
  providers: [HttpClient, {provide:ServesService,useClass:ServesService}],                 // مزودات إذا لزم الأمر
  bootstrap: [AppComponent]      // تحديد المكون الذي سيتم تحميله عند بدء التطبيق
})
export class AppModule { }

// تهيئة التطبيق باستخدام platformBrowserDynamic
 platformBrowserDynamic().bootstrapModule(AppModule,{ngZoneEventCoalescing:true})
  .catch(err => console.error(err));