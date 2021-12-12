import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { TruckservicesPage } from './truckservices.page';


const routes: Routes = [
  {
    path: '',
    component: TruckservicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
   
    RouterModule.forChild(routes)
  ],

  declarations: [TruckservicesPage]
})
export class TruckservicesPageModule {}
