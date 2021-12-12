import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from '../../../components/components.module';
import { ViewservicesPage } from './viewservices.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: ViewservicesPage}])
  ],



  declarations: [ViewservicesPage]
})
export class ViewservicesPageModule {}
