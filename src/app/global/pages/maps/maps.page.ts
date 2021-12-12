import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController, LoadingController, ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { GoogleMapComponent } from '../../../components/google-map/google-map.component';
import { ModalSearchOriPage } from '../modal-search-ori/modal-search-ori.page';

import { myEnterAnimation } from '../animationenter';
import { myLeaveAnimation } from '../animationleave';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { BindingScope } from '@angular/compiler/src/render3/view/template';


 /************************************************************************************ */

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
 /************************************************************************************ */
export class MapsPage implements OnInit {
  public searchOrigen:string='';
  public searchDestino:string='';

  googleAutoComplete= new google.maps.places.AutocompleteService();
  searchResult=new Array<any>();
  
  myLatLong = {lat: 6.260128, lng: -75.574430};

 @ViewChild('directionsPanel') directionsPanel: ElementRef;
  @ViewChild(GoogleMapComponent) _GoogleMap: GoogleMapComponent;
  map: google.maps.Map;  
  mapOptions: google.maps.MapOptions = {
    zoom: 12,
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
  /*************          VARIABLES            *************************** */
  /*********************************************************************** */
  loadingElement: any;
  origenServ:any;
  distServ="";
  oringenlatitud="";
  origenlongitud="";
  destinolatitud="";
  destinolongitud="";
  geocoder: any;
 
  val:any;
 /************************************************************************************ */
  constructor(private loadingController: LoadingController,public navCtrl:NavController, 
    public activatedRoute:ActivatedRoute,public formBuilder:FormBuilder, private modalCtrl:ModalController,
    private router:Router,private alertController:AlertController) {
      
     }

      /************************************************************************************ */
    async ngOnInit() {
      
      this._GoogleMap.$mapReady.subscribe(map => {
        this.map = map;
      });
      this.searchOrigen="";
      this.searchDestino="";
     
      this.createLoader();
      
    }
   /************************************************************************************ */
    async createLoader() {
      this.loadingElement = await this.loadingController.create({
        message: 'Obteniendo su location...'
      });
      this.geolocateMe();
    }
   /************************************************************************************ */
    async presentLoader() {
      await this.loadingElement.present();
     
    }
  
     /************************************************************************************ */
    async dismissLoader() {
      if (this.loadingElement) {
        await this.loadingElement.dismiss();
      }
    }
  
     /************************************************************************************ */
   async geolocateMe() {
  
     this.presentLoader();
     var infoWindow:google.maps.Map;
      Geolocation.getCurrentPosition().then(position => { 
        
        const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(current_location);
        
        /******************************************* */
        
        let latlng={
          lat:position.coords.latitude,
          lng:position.coords.longitude,
          move:"S"
       }
     
     
        this.ubicacionActual(latlng)

       // this.agregarMarcador(latlng)

        /**************************************** */
        
        // add a marker
          var image = "https://img.atrisoluciones.com.co/img/ubicacion.png";
       
       var contenidoStrig ="Usted esta AQUI! Sergio";
        var infoWindow=new google.maps.InfoWindow({
            content:contenidoStrig
        });

      var marker = new google.maps.Marker({
          position: current_location,
         // title: 'Usted esta AQUI!',
          icon:image,
          draggable:true,
          animation: google.maps.Animation.DROP
           
        });
        var map: google.maps.Map;
        var marker: google.maps.Marker;
        marker.addListener('dragend',(event)=>{

           let latlng={
                  lat:event.latLng.lat(),
                  lng:event.latLng.lng(),
                  move:"N"
               }
   
              this.origenServ= this.origenUbicacion(latlng);
                      
              infoWindow.open(map,marker);
            });
           
           marker.setMap(this.map);

      }).catch((error) => {
        console.log('Error getting current location', error);
  
      }).finally(() => this.dismissLoader());
      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(this.map);
  
    }

    /******************************************* */

    async origenUbicacion(latlng){
  

      if(latlng.move=='N'){
        let geocoder=new google.maps.Geocoder;
                  let val=geocoder.geocode({'location': latlng}, (results,status)=> {
                    var infowindow = new google.maps.InfoWindow;
                    infowindow.setContent(results[0].formatted_address); 
                    this.origenServ=results[0].formatted_address;
                   
                  });
      }
        
     // this.agregarMarcador(latlng);         
      return  this.origenServ;
     }
      
 /********************************************* */

 async ubicacionActual(latlng:any){
  

  if(latlng.move=='S'){
    let geocoder=new google.maps.Geocoder;
              let val=geocoder.geocode({'location': latlng}, (results,status)=> {
                var infowindow = new google.maps.InfoWindow;
                infowindow.setContent(results[0].formatted_address); 
                //this.origenServ=results[0].formatted_address;
                this.origenServ="Tu ubicación Actual";
               // let tipoSearch=1;
               // this.geocodePlaceId(results[0].place_id,tipoSearch)
                
              });
  }
  

    return  this.origenServ;
  
 

}
        
  
  /************************************************************************************ */  

  async searchDirOrigen(){
    const modal=  await this.modalCtrl.create({
      component:ModalSearchOriPage,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      componentProps:{
        'destinoServ':'Ingrese la dirección de Origen',
        'opcion':'1'
          }

    });
     await modal.present();

     const {data}=await modal.onDidDismiss();
     console.log(data['nombreUbicacion']);
     if(data['nombreUbicacion']!=''){
      const searchDestino=(data['nombreUbicacion']);
      const opcion=data['opcion'];
      var idPlace= data.id;
      var tipoSearch=1;
      this.pasarDato(searchDestino,opcion);
      this.geocodePlaceId(idPlace,tipoSearch);
     }
 
  }
/************************************************************************************ */
async searchDirDestino(){
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

   const {data}=await modal.onDidDismiss();
   console.log(data['nombreUbicacion']);
   if(data['nombreUbicacion']!=''){
    const searchDestino=(data['nombreUbicacion']);
    const opcion=data['opcion'];
    var idPlace= data.id;
    var tipoSearch=2;
    this.pasarDato(searchDestino,opcion);
    this.geocodePlaceId(idPlace,tipoSearch);
   }
   

}
 
   /************************************************************************************ */
   
   pasarDato(ubicacion,opcion){

      if(opcion =='1'){this.searchOrigen=ubicacion;}
      if(opcion =='2'){this.searchDestino=ubicacion;}
    
   }
/************************************************************************************ */
  async geocodePlaceId(idPlace,tipoSearch) {
   var tipoSearch

   var map:google.maps.Map;
   var placeId = idPlace
   this.geocoder = new google.maps.Geocoder();

   switch (tipoSearch) {
     case 1:
      this.geocoder.geocode({'placeId': placeId}, (results,status)=> {

        if (status === google.maps.GeocoderStatus.OK) { 
          let positionO={
           origenlatitud:results[0].geometry.location.lat(),
           origenlongitud:results[0].geometry.location.lng()
          };
         
        this.origenlongitud=positionO.origenlongitud;
        this.oringenlatitud=positionO.origenlatitud;
        this.geolocate(positionO.origenlatitud,positionO.origenlongitud);

      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
       break;
       case 2:
        this.geocoder.geocode({'placeId': placeId}, (results,status)=> {
          
          if (status === google.maps.GeocoderStatus.OK) { 
            let positionD={
             destinolatitud:results[0].geometry.location.lat(),
             destinolongitud:results[0].geometry.location.lng()
            };
           
            this.destinolongitud=positionD.destinolongitud;
            this.destinolatitud=positionD.destinolatitud;
            //this.geolocate(positionD.destinolatitud,positionD.destinolongitud);
            this.startNavigating();
  
         
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });

        break;
     default:
       break;
   }
   
   

  }
    
  
  /************************************************************************************** */
  async agregarMarcador(latlng){
    
    var image = "https://img.atrisoluciones.com.co/img/Bandera.png";
    var marker = new google.maps.Marker({
      position: latlng,
      title: 'Ubicacion Orgien...!',
      icon:image,
      animation: google.maps.Animation.DROP,
      //draggable:true
    });
   
    
  marker.setMap(this.map);
  //this.origenUbicacion(latlng);
  }

/************************************************************************************ */
async geolocate(latitud,longitud){
  
    this.presentLoader();
    var lat=latitud;
    var lng=longitud;
      var infoWindow:google.maps.Map;
     Geolocation.getCurrentPosition().then(position => { 
       
      const current_location = new google.maps.LatLng(latitud,longitud);
     
       this.map.panTo(current_location);
       
       
       // add a marker
     // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      
      var contenidoStrig ="Ubicación Origen Servicio ..!";
       var infoWindow=new google.maps.InfoWindow({
           content:contenidoStrig
       });

       var marker = new google.maps.Marker({
         position: current_location,
         title: 'Ubicacion Orgien...!',
        //icon:image,
        animation: google.maps.Animation.DROP,
        draggable:true
       });
      
       
     marker.setMap(this.map);

     }).catch((error) => {
       console.log('Error getting current location', error);
 
     }).finally(() => this.dismissLoader());
     var trafficLayer = new google.maps.TrafficLayer();
     trafficLayer.setMap(this.map);
 
   }

   /**************************************************************** */

   async irA_Solicitud(){

      const enviardatos={
        'origenServ':this.searchOrigen,
        'Olng':this.origenlongitud,
        'Olat':this.oringenlatitud,
        'Dlng':this.destinolongitud,
        'Dlat':this.destinolatitud,
        'destinoServ':this.searchDestino,
        'distServ':this.distServ
      }
      if(enviardatos.origenServ ==="" || enviardatos.destinoServ===""){
        const alert = await this.alertController.create({
          
          message:"Faltan datos por ingresar ...",
          buttons:['Ok']  
        })
          await alert.present();
      }else{
        //console.log(this.origenlongitud);
        this.router.navigate(['/solicitud',enviardatos.origenServ,enviardatos.Olng,enviardatos.Olat,
        enviardatos.Dlng,enviardatos.Dlat,enviardatos.destinoServ,enviardatos.distServ]);
      }
   }

    /************************************************************************************ */

/* ***** CREAR RUTA DE VEHICULO ************/

    startNavigating() {

     this.presentLoader();
      Geolocation.getCurrentPosition({
        timeout:7000
      }).then(position => {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
  
      directionsDisplay.setMap(this.map);
  
  
      directionsService.route({
        origin: {lat:Number(this.oringenlatitud),lng:Number(this.origenlongitud)},
        destination: {lat:Number(this.destinolatitud),lng:Number(this.destinolongitud)},
        travelMode: google.maps.TravelMode['DRIVING']
      }, (res, status) => {
  
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(res);
          //console.log((res.routes[0].legs[0].distance.value)/1000);
          this.distServ=res.routes[0].legs[0].distance.text
         // console.log(res.routes[0].legs[0].distance.text);
         console.log(res);
        } else {
          console.warn(status);
          
        }
  
      });
    }).catch((error) => {
      console.log('Error getting current location', error);
  
    }).finally(() => this.dismissLoader());
  
  
    }

 
}
