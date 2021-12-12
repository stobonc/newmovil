import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitudPage } from './solicitud.page';
import{ComponentsModule}from'../../../components/components.module';
import { ModalFeePage } from '../modal-fee/modal-fee.page';
import { ModalFeePageModule } from '../modal-fee/modal-fee.module';

const routes: Routes = [
  {
    path: '',
    component: SolicitudPage
  }
];

@NgModule({
  entryComponents:[
    ModalFeePage
  ],
  imports: [
    CommonModule,
    ModalFeePageModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
   
   
  ],
  declarations: [SolicitudPage]
})
export class SolicitudPageModule {}
