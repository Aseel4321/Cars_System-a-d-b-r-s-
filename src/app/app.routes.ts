import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AcceptComponent } from './accept/accept.component';
import { ClientCarsComponent } from './client-cars/client-cars.component';
import { AddModelComponent } from './add-model/add-model.component';
import { Component } from '@angular/core';
import { ModelsComponent } from './models/models.component';

export const routes: Routes = [
    { path: '', redirectTo: 'accept', pathMatch: 'full' },
    { path: 'accept', component: AcceptComponent },
    { path: 'cli', component: ClientComponent },
    { path: 'cars-cli/:id', component: ClientCarsComponent },
    { path: 'add', component: AddModelComponent },
    {path:'models',component:ModelsComponent}
];
