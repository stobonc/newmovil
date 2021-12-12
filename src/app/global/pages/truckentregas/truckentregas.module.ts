import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule}from'../../../components/components.module';
import { IonicModule } from '@ionic/angular';

import { TruckentregasPage } from './truckentregas.page';

const routes: Routes = [
  {
    path: '',
    component: TruckentregasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TruckentregasPage]
})
export class TruckentregasPageModule {}
