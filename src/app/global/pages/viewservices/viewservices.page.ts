import { Component, ViewChild, OnInit, ElementRef, Input } from '@angular/core';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../../components/google-map/google-map.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewservices',
  templateUrl: './viewservices.page.html',
  styleUrls: ['./viewservices.page.scss'],
})
export class ViewservicesPage implements OnInit{ 
  submitted=false; 

    @ViewChild(GoogleMapComponent) _GoogleMap: GoogleMapComponent;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
  
  googleAutoComplete= new google.maps.places.AutocompleteService();
  searchResult=new Array<any>();

  myLatLong = {lat: 6.260128, lng: -75.574430};
 

 map: google.maps.Map;  
 mapOptions: google.maps.MapOptions = {
   zoom: 13,
   center: this.myLatLong,
   zoomControl: true,
   scaleControl: true,
   streetViewControl: true,
   streetViewControlOptions: {
       position: google.maps.ControlPosition.LEFT_TOP
   },
   
   zoomControlOptions: {
       position: google.maps.ControlPosition.RIGHT_BOTTOM
   },
   gestureHandling: 'cooperative',

   // uncomment the following line if you want to remove the default Map controls
   disableDefaultUI: true
 };
  loadingElement: any;
  created_at="";
  descripcionServ="";
  destinoLatitud="";
  destinoLongitud="";
  destinoServ="";
  distancia="";
  distanciaServicio="";
  id:any;
  origenLatitud="";
  origenLongitud="";
  origenServ="";
  distServ="";

  data:any;
estatus:any;
valu:any;
  /******************************************************************************************* */

  constructor(private loadingController: LoadingController, private activatedRoute:ActivatedRoute,
    public navCtrl: NavController,public httpClient: HttpClient,private alertController:AlertController,private router:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
    //  console.log(params);
      if(params && params.data){
        this.data=JSON.parse(params.data);
     
        console.log(params.data, 'esto llego');
      }
    })

    //this.origenServ=this.activatedRoute.snapshot.paramMap.get('origenServ');

   }


  async ngOnInit(){
 
    this._GoogleMap.$mapReady.subscribe(map => {
      this.map = map;
      this.startNavigating();
    
    });

    this.createLoader();
   
  }


  async createLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Trying to get your current location...'
    });
    this.startNavigating();
  }
  
  async presentLoader() {
    await this.loadingElement.present();
  }
  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }
  
   
  /*******************  CREAR RUTA DE VEHICULO ****************************************/


  async startNavigating() {

    //this.presentLoader();
     Geolocation.getCurrentPosition({
       timeout:8000,
        maximumAge: 0,
     }).then(position => {
     let directionsService = new google.maps.DirectionsService;
     let directionsDisplay = new google.maps.DirectionsRenderer;
 
     directionsDisplay.setMap(this.map);
 
     directionsService.route({
       origin: {lat:Number(this.data.origenLatitud),lng:Number(this.data.origenLongitud)},
       destination: {lat:Number(this.data.destinoLatitud),lng:Number(this.data.destinoLongitud)},
       travelMode: google.maps.TravelMode['DRIVING']
     }, (res, status) => {
 
       if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(res);
         //console.log((res.routes[0].legs[0].distance.value)/1000);
         this.distServ=res.routes[0].legs[0].distance.text

       } else {
         console.warn(status);
         
       }
 
     });
   }).catch((error) => {

   }).finally(() => this.dismissLoader());
 
 
   }

//************************************************************************************ */
  geolocateMe() {

    this.presentLoader();
    Geolocation.getCurrentPosition().then(position => {

      const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.map.panTo(current_location);

      // add a marker
      const marker = new google.maps.Marker({
        position: current_location,
        title: 'You are here!',
        // animation: google.maps.Animation.DROP
      });

      // To add the marker to the map, call setMap();
      marker.setMap(this.map);

    }).catch((error) => {
      console.log('Error getting current location', error);

    }).finally(() => this.dismissLoader());
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 280);
  }

/*********************************************************************** */

async aceptarSolicitud() {
    
  //this.submitted = true;


  //let url:string="https://newmovil.tacmosas.com/api/truckservices/update";

  let url:string="http://127.0.0.1:8000/user";

 var headers = new HttpHeaders();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE,OPTIONS');
  headers.append('Access-Control-Allow-Headers', 'x-id');



  let dataPost={
      'id':Number(this.data.id),
      'estatus':'1',
      'finEntrega':'N',
      'userEntrega':localStorage.getItem('UserCod'),

  };

  this.valu=dataPost;


  let data:Observable<any>= this.httpClient.put(url,dataPost,{headers:headers,responseType:'text'})
 
  data.subscribe(async data => {
  
  //  console.log(data);
    let info=JSON.parse(data);
    console.log(info);

    if(info['code']==200){
     
      const alert = await this.alertController.create({
        header:'Solicitud',
        message:"Solicitud aceptada Correctamente",
        buttons:['Ok']  
      })
        await alert.present();
 
        this.router.navigateByUrl('/inicio');

     }else{
        const alert = await this.alertController.create({
          header:'Solicitud',
          message:'La solicitud no se acepto, ha ocurrido un error',
          buttons:['Ok']  
       })

          await alert.present();
          this.router.navigateByUrl('/inicio');

      }
    
      },(err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
         //we never seem to get here
          console.log('An error occurred:', err.error.message);
        } else {
         //no network connection, HTTP404, HTTP500, HTTP200 & invalid JSON
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );

  }

}
