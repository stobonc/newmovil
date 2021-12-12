import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HttpHeaders ,HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
const { Geolocation,Geoposition } = Plugins;


@Component({
  selector: 'app-truckservices',
  templateUrl: './truckservices.page.html',
  styleUrls: ['./truckservices.page.scss'],
})
export class TruckservicesPage {
  lat:number
  lng:number
  total:string
  formgroup:FormGroup;
  submitted=false; 
  geocoder: any;
  dataServicios:any[]=[];
  data: any;
  medidas:any;
  url_Imagen:any;

  
 
  constructor(public formBuilder:FormBuilder,public HttpClient:HttpClient, 
    private router:Router,public navCtrl: NavController,private alertController:AlertController) { 
 
  }

 
  ngOnInit() {
  this.ionViewDidEnter();
   
  }
  ionViewDidEnter(){
    this.formgroup = this.formBuilder.group({
      //descripcionServ:['',[Validators.required,Validators.minLength(6)]]
           
        }, {});
        this.getGeolocation();
  }
  async onSubmit(): Promise<void>{
    this.submitted = true;

    if (this.formgroup.invalid) {
      return;
     }

     //let url:string="https://atrisoluciones.com.co/api/servicios";
    let url:string="https://newmovil.tacmosas.com/api/truckservices";

      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'x-id');


      let dataPost={
          'latitudActual':this.lat,
          'longitudActual':this.lng,
          'estatus':'0',
     
          };

        let data:Observable<any>= this.HttpClient.post(url,dataPost,{headers:headers,responseType: 'text'})
        data.subscribe(async data=>{
         // console.log(dataPost);
          this.dataServicios=JSON.parse(data);
         console.log(this.dataServicios[0]['url_Imagen'],'dataServ');

        },(err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
           //we never seem to get here
            console.log('An error occurred:', err.error.message);
          } else {
           //no network connection, HTTP404, HTTP500, HTTP200 & invalid JSON
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });
}

  async getGeolocation(){
    try{
        const position = await Geolocation.getCurrentPosition();
        console.log(position);
    
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        var lng1=Number(-74.778547);
        var lat1=Number(7.203511);
        var latlng={lat:lat1,lng:lng1};
 
      }catch(error){

      const ubicacion =error['code'];

      if(ubicacion ===2){
          const alert = await this.alertController.create({
          header:'GPS',
          message:'No se puede obtener su ubicación de GPS, favor validar si esta activada el GPS y si tiene conexion a Internet',
          buttons:['Ok']
          
          });
          this.router.navigateByUrl('/inicio');
          await alert.present();

        }else{
              this.geocoder = new google.maps.Geocoder();
              this.geocoder.geocode({'location': latlng}, (results,status)=> {
          
                if (status === google.maps.GeocoderStatus.OK) { 
              
                /*console.log(results[0]);
                console.log(results['0']['address_components']['3']['long_name']);
                console.log(results['0']['address_components']['6']['long_name']);
                console.log(results['0']['address_components']['5']['long_name']);*/

              } else {
                window.alert('La geolocalización ha fallado debido a: ' + status);
                }
            }); 

        }
        
        }

    this.onSubmit();
  }

 public Ir_a(event){

  

  if(event.tipoServicio==1){

    this.medidas=`|| Largo: ${event.largoCms} -Cms. || Ancho: ${event.anchoCms} -Cms. || Alto: ${event.altoCms} -Cms. || Cantidad: ${event.cantidadUnd} -Cajas. || Peso: ${event.pesoKg} -Kg || Valor Declarado: $${event.valorDeclarado} ||`
  
  }else{
    if(event.tipoServicio==2){
      this.medidas=`|| Cantidad: ${event.cantidadUnd} -Cajas. || Peso: ${event.pesoKg} -Kg || Valor Declarado: $${event.valorDeclarado} ||`
    }else{
      this.medidas=`|| Valor Declarado: $${event.valorDeclarado} ||`
      
    }
  }


 console.log(this.url_Imagen, 'esta es la foto');
    this.data={
    'created_at': event.created_at,
    'descripcionServ': event.descripcionServ,
    'destinoLatitud': event.destinoLatitud,
    'destinoLongitud': event.destinoLongitud,
    'destinoServ': event.destinoServ,
    'distancia': event.distancia,
    'distanciaServicio': event.distanciaServicio,
    'id': event.id,
    'valorDeclarado':event.valorDeclarado, 
    'origenLatitud': event.origenLatitud,
    'origenLongitud': event.origenLongitud,
    'origenServ': event.origenServ,
    'largo':event.largoCms,
    'medidas':this.medidas,
    'tipoServicio':event.tipoServicio,
    'estatus':event.estatus,
    'url_Imagen':this.dataServicios[0]['url_Imagen'],
    'prueba':'sergio'
  
    }

    
  const extras:NavigationExtras={
      queryParams:{
        data: JSON.stringify(this.data),
      }

  };

  console.log(extras,'extras');
    this.router.navigate(['/viewservices'],extras);
    this.ngOnDestroy();

  }
  ngOnDestroy(){
  
  }
}
