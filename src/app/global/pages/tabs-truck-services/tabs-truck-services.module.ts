import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsTruckServicesPage } from './tabs-truck-services.page';

const routes: Routes = [
  {
    path: '',
    component: TabsTruckServicesPage,
    children:[
      {
      path:'truckservices',
      loadChildren:'../truckservices/truckservices.module#TruckservicesPageModule',
      },
      {
      path:'truckservruta',
      loadChildren:'../truckservruta/truckservruta.module#TruckservrutaPageModule',
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsTruckServicesPage]
})
export class TabsTruckServicesPageModule {}
