import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AcceptComponent } from './accept/accept.component';
import { ClientCarsComponent } from './client-cars/client-cars.component';
import { AddModelComponent } from './add-model/add-model.component';
import { Component } from '@angular/core';
import { ModelsComponent } from './models/models.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'h', pathMatch: 'full' },
    { path: 'h', component:HomepageComponent,children:[
        { path: 'accept', component: AcceptComponent },
    { path: 'cli', component: ClientComponent},
   { path: 'cars-cli/:id', component: ClientCarsComponent }
    ,{ path: 'add', component: AddModelComponent },
    {path:'models',component:ModelsComponent}] },
   
];
