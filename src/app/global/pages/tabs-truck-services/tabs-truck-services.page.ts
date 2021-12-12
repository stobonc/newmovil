import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-tabs-truck-services',
  templateUrl: './tabs-truck-services.page.html',
  styleUrls: ['./tabs-truck-services.page.scss'],
})
export class TabsTruckServicesPage implements OnInit {
  dataServicios:any[]=[];
  enRuta;
  pendientes;
  loadingElement: any;


  constructor( public HttpClient:HttpClient,private loadingController: LoadingController) { }
 
  ngOnInit(): void {
  //  this.createLoader();
   this.onSubmit();
  }

  async onSubmit(){

    Geolocation.getCurrentPosition().then(position => {

       const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //this.map.panTo(current_location);

  

     this.obtenerServicios(position.coords.latitude,position.coords.longitude);

    }).catch((error) => {
    //  console.log('Error getting current location', error);

    }).finally(() => this.dismissLoader());



  
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }
 async obtenerServicios(latitud,longitud){
   
    /********************************************************************************* */
    let url:string="https://newmovil.tacmosas.com/api/truckservices";


       const params = new HttpParams()
       .set('enRuta','1')
       .set('Pendientes','0')
       .set('latitud',latitud)
       .set('longitud',longitud)

      // console.log(params.get('estatus'),params.get('tipo'));
      let data:Observable<any>= this.HttpClient.get(url,{params})
       data.subscribe(async data=>{
        // console.log(dataPost);
         this.dataServicios=(data);
        console.log(this.dataServicios);
        this.enRuta=this.dataServicios['enRuta'];
        this.pendientes=this.dataServicios['pendientes'];

       },(err: HttpErrorResponse) => {
         if (err.error instanceof Error) {
          //we never seem to get here
         console.log('An error occurred:', err.error.message);
         } else {
          //no network connection, HTTP404, HTTP500, HTTP200 & invalid JSON
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
         }
       });
    //   this.dataServicios= this.data.subscribe(data =>{this.dataServicios=data;});


 }
}
