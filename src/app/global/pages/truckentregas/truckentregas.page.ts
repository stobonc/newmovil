import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../../components/google-map/google-map.component';


import { ActivatedRoute, Router } from '@angular/router';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-truckentregas',
  templateUrl: './truckentregas.page.html',
  styleUrls: ['./truckentregas.page.scss'],
})
export class TruckentregasPage implements OnInit {

  
  @ViewChild(GoogleMapComponent) _GoogleMap: GoogleMapComponent;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  
  map: google.maps.Map;
  myLatLong = {lat: 6.260128, lng: -75.574430};
 
 mapOptions: google.maps.MapOptions = {
   zoom: 16,
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
   disableDefaultUI: true
  };
  loadingElement: any;
  data: any;
  latitudEntrega:any;
  longitudEntrega:any;
  ranking:number;


  constructor(private loadingController: LoadingController,private activatedRoute:ActivatedRoute,private httpClient:HttpClient,
    private alertController:AlertController,private router:Router) { 
      this.ranking=0;
    this.activatedRoute.queryParams.subscribe(params=>{
      //  console.log(params);
        if(params && params.data){
          this.data=JSON.parse(params.data);
          console.log(params.data);
        }
      })
  
  }

  ngOnInit() {
    this._GoogleMap.$mapReady.subscribe(map => {
      this.map = map;
     //this.geolocateMe();
    });
    this.createLoader();
  
  
  }

  async createLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Trying to get your current location...'
    });
    this.geolocateMe();
  }

  async presentLoader() {
    await this.loadingElement.present();
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();

    }
  }

  async geolocateMe() {
  
    this.presentLoader();
    var infoWindow:google.maps.Map;

    Geolocation.getCurrentPosition().then(position => { 
       
       const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       this.map.panTo(current_location);
 
       this.latitudEntrega=position.coords.latitude;
       this.longitudEntrega=position.coords.longitude;
      // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      
       var contenidoStrig ="Usted esta AQUI!";
       var infoWindow=new google.maps.InfoWindow({
           content:contenidoStrig
       });

     var marker = new google.maps.Marker({
         position: current_location,
         title: 'Usted esta AQUI!',
        // icon:image,
         animation: google.maps.Animation.DROP
          
       });
       var map: google.maps.Map;
       marker.addListener('click',function(){
         infoWindow.open(map,marker);
       });
       
       
     marker.setMap(this.map);
     this.map.panTo(current_location);

     }).catch((error) => {
       console.log('Error getting current location', error);
 
     }).finally(() => this.dismissLoader());
    
    }

 
    onChangeHandler($event) {
     this.ranking = $event.target.value;
      console.log($event.target.value);
    }


   
    
async finalizarEntrega() {

  if(this.latitudEntrega ==null || this.longitudEntrega==null){
  this.geolocateMe();
  }
    
  if(this.ranking==0){
   const alert = await this.alertController.create({
    header:'Entregar solicitud',
    message:"Por favor que su cliente califique la entrega",
    buttons:['Ok']  
  })
    await alert.present();

  }else{

  //console.log(this.latitud);
  let url:string="https://newmovil.tacmosas.com/api/truckservices/update";

  var headers = new HttpHeaders();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE,OPTIONS');
  headers.append('Access-Control-Allow-Headers', 'x-id');



  let dataPost={
      'id':Number(this.data.id),
      'estatus':'2',
      'ranking':this.ranking,
      'longitudEntrega':this.longitudEntrega,
      'latitudEntrega':this.latitudEntrega,
      'userEntrega':localStorage.getItem("UserCod"),
      'finEntrega':'S'

  };

  
  let data:Observable<any>= this.httpClient.put(url,dataPost,{headers:headers,responseType:'text'})
 
  data.subscribe(async data => {
  
  //  console.log(data);
    let info=JSON.parse(data);
    console.log(info);

    if(info['code']=='200'){
     
      const alert = await this.alertController.create({
        header:'Solicitud',
        message:"Se ha finalizado la entrega",
        buttons:['Ok']  
      })
        await alert.present();
 
        this.router.navigateByUrl('/inicio');

     }else{
        const alert = await this.alertController.create({
          header:'Solicitud',
          message:'ha ocurrido un error en la entrega',
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

    this.ngOnDestroy();
  }
}
 
  async ngOnDestroy(){
    console.log('Destroy entregas');
  }

}
