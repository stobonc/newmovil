import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../../components/google-map/google-map.component';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { Observable, observable } from 'rxjs';
import { ModalSearchOriPage } from '../modal-search-ori/modal-search-ori.page';
import { myEnterAnimation } from '../animationenter';
import { myLeaveAnimation } from '../animationleave';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs/operators';



@Component({
  selector: 'app-maps-services',
  templateUrl: './maps-services.page.html',
  styleUrls: ['./maps-services.page.scss'],
  
})
export class MapsServicesPage implements OnInit {

  //googleAutoComplete= new google.maps.places.AutocompleteService();
  searchResult=new Array<any>();
  myLatLong = {lat: 4.633338, lng:-74.311463};

 @ViewChild('directionsPanel') directionsPanel: ElementRef;
  @ViewChild(GoogleMapComponent) _GoogleMap: GoogleMapComponent;
    map: google.maps.Map; 
   
    mapOptions: google.maps.MapOptions = {
      zoom: 14,
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

loadingElement:any;
origenServ:any;
destinoServ:any;
LatLngDestino:any;
LatLngOrigen:any;
geocoder:any;
distServ:any;
grupoMarker=[];
directionsRenderer:google.maps.DirectionsRenderer;
extras:any;
user:any;

  constructor(private loadingController: LoadingController,private modalCtrl:ModalController,
    private router:Router,private alertController:AlertController,private activatedRoute:ActivatedRoute) {

      this.activatedRoute.queryParams.subscribe(params=>{

        if(params && params.datos){
          this.user=params.datos;
         
        }

      });
      
     }
 
  ngOnInit() {
   this._GoogleMap.$mapReady.subscribe(map => {
      this.map = map;
    });
   //this.ionViewWillEnter();
  
  }

  async createLoader() {
    this.loadingElement = await this.loadingController.create({
      message: 'Trying to get your current location...'
    });
    
  }

  async presentLoader() {
    await this.loadingElement.present();
    //this.ionViewWillEnter();
  }

  async dismissLoader() {
    if (this.loadingElement) {
      await this.loadingElement.dismiss();
    }
  }

  /********************************************************************* */

  async ionViewWillEnter(){
    console.log('ingrese')
    
    this.ubicacionInicial();
   
  }
async ubicacionInicial(){

 // window.location.replace('/maps-services')
  var infoWindow:google.maps.Map;
  Geolocation.getCurrentPosition({timeout:500}).then(position=>{
    const ubicacionActual=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  
    this.LatLngOrigen={
      lat:position.coords.latitude,
      lng:position.coords.longitude  
   }

   // centrar el mapa en la ubicación inicial
  let mapOptions: google.maps.MapOptions = {
   // zoom:15,
    center: this.LatLngOrigen,  
  
  };
    
    this.crearMarke(this.LatLngOrigen);// crear marcador de inicio de ruta
   setTimeout(() => {
      
      this.map.panTo(this.LatLngOrigen); // Dibujar el mapa
    },270);
  
  });
  
}

/********************************************************************** */
 crearMarke(ubicacionActual){
  
  var image = "https://img.atrisoluciones.com.co/img/ubicacion.png";
  var marker=new google.maps.Marker({
    position:ubicacionActual,
    icon:image,
    draggable:true,
    animation: google.maps.Animation.DROP,

  });

  marker.setMap(this.map);

  this.tuDireccion(this.LatLngOrigen);
 
//Permite mover el marcador de Origen

  google.maps.event.addListener(marker,'dragend',(event)=>{
      this.LatLngOrigen={
            lat:event.latLng.lat(),
            lng:event.latLng.lng(),
        }

    // Busca la direccion del marcador de inicio si se mueve

  var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'location': this.LatLngOrigen},(results, status)=> {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        this.origenServ= results[0].formatted_address;
        
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
 // Si se mueve la ubicacion inicial sin tener la ubicacion final y poder calcular la ruta 
  if(this.LatLngDestino!=null){
    this.trazarRuta();
  
  }

});
//infoWindow.open(this.map,marker); // abre el marker

 }



/*********************************************************************** */
async tuDireccion(LatLngOrigen){
  var infowindow = new google.maps.InfoWindow;
  var geocoder = new google.maps.Geocoder;
  
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
  geocoder.geocode({'location': LatLngOrigen},(results, status)=> {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        infowindow.setContent(results[0].formatted_address);
        this.origenServ = results[0].formatted_address;
        
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
  
}
/*********************************************************************** */
async searchDirDestino(){

  // llama la modal (ModalSearchOriPage) para buscar la información

  const modal=  await this.modalCtrl.create({
    component:ModalSearchOriPage,
    enterAnimation: myEnterAnimation,
    leaveAnimation: myLeaveAnimation,
    componentProps:{
      'origenServ':'Ingrese la dirección de Destino',
      'opcion':'2'
        }

  });
   await modal.present();
    // se recibe la informacion del lugar a buscar

   const {data}=await modal.onDidDismiss();
   console.log(data['nombreUbicacion']);
   if(data['nombreUbicacion']!=''){

    var idPlace= data.id;
    this.destinoServ=data['nombreUbicacion'];

  // Funcion que permite encontrar la lat, lng del destino

    this.geocoder = new google.maps.Geocoder();
    var infoWindow = new google.maps.InfoWindow;
  
      var dat=this.geocoder.geocode({'placeId': idPlace}, (results,status)=> {
 
         if (status === google.maps.GeocoderStatus.OK) { 
           this.LatLngDestino={
            lat:results[0].geometry.location.lat(),
            lng:results[0].geometry.location.lng()
           };
          }  
           // Esta funcion permite crear  el marcador de destino

          var image = "https://img.atrisoluciones.com.co/img/puntoFinalDes.png";
          var marker=new google.maps.Marker({
              position:this.LatLngDestino,
              icon:image,
              draggable:true,
              animation: google.maps.Animation.DROP
            });
  
            
            if(this.grupoMarker.length!=0){
              this.grupoMarker[0].setMap(null);
            }

            this.grupoMarker.push(marker);
            marker.setMap(this.map);
            
            this.trazarRuta();
            // Esta funcion permite mover el marcador de destino

            google.maps.event.addListener(marker,'dragend',(event)=>{
           // this.grupoMarker[0].setMap(null);
          
            let latlng={
               lat:event.latLng.lat(),
               lng:event.latLng.lng(),
              }
              this.LatLngDestino=latlng;

              let geocoder = new google.maps.Geocoder;
              geocoder.geocode({'location': latlng},(results, status)=> {
                if (status === google.maps.GeocoderStatus.OK) {
                  if (results[0]) {
                    //infowindow.setContent(results[0].formatted_address);
                    this.destinoServ= results[0].formatted_address;
                    
                  } else {
                    window.alert('No results found');
                  }
                } else {
                  window.alert('Geocoder failed due to: ' + status);
                }
              });
              
              this.trazarRuta();
          });

       });
      
      
   }
  }

 //**************************************************************** */

 async trazarRuta() {
  
  // limpia los marcadores creados  que hay en mapa
    if (this.directionsRenderer != null) 
      { this.directionsRenderer.setMap(null); 
      this.directionsRenderer = null;
     }

    let directionsService = new google.maps.DirectionsService();  
    this.directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers:true}); 
    this.directionsRenderer.setMap(this.map);

    // se calcula la distancia de la ruta
   directionsService.route({
     origin: {lat:Number(this.LatLngOrigen.lat),lng:Number(this.LatLngOrigen.lng)},
     destination: {lat:Number(this.LatLngDestino.lat),lng:Number(this.LatLngDestino.lng)},
     travelMode: google.maps.TravelMode['DRIVING'],
      provideRouteAlternatives: true
   }, (results, status) => {

     if (status == google.maps.DirectionsStatus.OK) {
       this.directionsRenderer.setDirections(results);
       //console.log((res.routes[0].legs[0].distance.value)/1000);
       this.distServ=results.routes[0].legs[0].distance.text
      console.log(this.distServ);
     } else {
       console.warn(status);
       
     }

   });
   this.directionsRenderer.setMap(this.map);

 }
//********************************************************************* */
  async irA_Solicitud(){

    const extras:NavigationExtras={
      queryParams:{
      'origenServ':this.origenServ,
      'Olng':this.LatLngOrigen.lng,
      'Olat':this.LatLngOrigen.lat,
      'Dlng':this.LatLngDestino.lng,
      'Dlat':this.LatLngDestino.lat,
      'destinoServ':this.destinoServ,
      'distServ':this.distServ,
      
      }
    };

    console.log(extras.queryParams['distServ'],'extras');
   // this.router.navigate(['/maps-services'],extras);
//}

    if(extras.queryParams['origenServ'] ==="" || extras.queryParams['destinoServ']===""){
      const alert = await this.alertController.create({
        
        message:"Faltan datos por ingresar ...",
        buttons:['Ok']  
      })
        await alert.present();
    }else{
      //console.log(this.origenlongitud);
      this.router.navigate(['/solicitud'],extras);
    }
  }

  async ngOnDestroy(){
    
      
      location.reload(true);
           console.log('tiempo para descargar');
   
  }
}