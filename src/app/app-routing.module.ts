import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'walkthrough', pathMatch: 'full' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
/*  { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
  { path: 'auth/login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'auth/signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'auth/forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'contact-card', loadChildren: './contact-card/contact-card.module#ContactCardPageModule' },
  { path: 'forms-and-validations', loadChildren: './forms/validations/forms-validations.module#FormsValidationsPageModule' },
  { path: 'forms-filters', loadChildren: './forms/filters/forms-filters.module#FormsFiltersPageModule' },
  //{ path: 'page-not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' },
  { path: 'showcase', loadChildren: './showcase/showcase.module#ShowcasePageModule' },
  { path: 'firebase', loadChildren: './firebase/firebase-integration.module#FirebaseIntegrationModule' },
 // { path: 'maps', loadChildren: './maps/maps.module#MapsPageModule' },
  { path: 'video-playlist', loadChildren: './video-playlist/video-playlist.module#VideoPlaylistPageModule' },*/
  { path: '**', redirectTo: 'page-not-found' },
  { path: 'login', loadChildren: './global/pages/login/login.module#LoginPageModule' },
  { path: 'maps', loadChildren: './global/pages/maps/maps.module#MapsPageModule' }, 
 { path: 'solicitud', loadChildren: './global/pages/solicitud/solicitud.module#SolicitudPageModule' },

  { path: 'registrousuario', loadChildren: './global/pages/registrousuario/registrousuario.module#RegistrousuarioPageModule' },
  { path: 'truckservices', loadChildren: './global/pages/truckservices/truckservices.module#TruckservicesPageModule' },
  { path: 'inicio', loadChildren: './global/pages/inicio/inicio.module#InicioPageModule' },
  {path:'viewservices' ,loadChildren: './global/pages/viewservices/viewservices.module#ViewservicesPageModule'},
  { path: 'tabs-truck-services', loadChildren: './global/pages/tabs-truck-services/tabs-truck-services.module#TabsTruckServicesPageModule' },
  { path: 'truckservruta', loadChildren: './global/pages/truckservruta/truckservruta.module#TruckservrutaPageModule' },
  { path: 'truckentregas', loadChildren: './global/pages/truckentregas/truckentregas.module#TruckentregasPageModule' },
  { path: 'maps-services', loadChildren: './global/pages/maps-services/maps-services.module#MapsServicesPageModule' },

  //{ path: 'modal-fee', loadChildren: './global/pages/modal-fee/modal-fee.module#ModalFeePageModule' },

  //{ path: 'modal-search-ori', loadChildren: './global/pages/modal-search-ori/modal-search-ori.module#ModalSearchOriPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
