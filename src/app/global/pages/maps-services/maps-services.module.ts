import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapsServicesPage } from './maps-services.page';
import { ComponentsModule } from '../../../components/components.module';
import { ModalSearchOriPage } from '../modal-search-ori/modal-search-ori.page';
import { ModalSearchOriPageModule } from '../modal-search-ori/modal-search-ori.module';

const routes: Routes = [
  {
    path: '',
    component: MapsServicesPage
  }
];

@NgModule({
  entryComponents:[
    ModalSearchOriPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalSearchOriPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapsServicesPage]
})
export class MapsServicesPageModule {}
