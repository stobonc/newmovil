import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ModalFeePage } from '../modal-fee/modal-fee.page';
import { Plugins, CameraResultType, CameraSource, Capacitor, } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
const { Camera } = Plugins;



@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
  submitted=false; 
  recibirDatosOrigen=""; recibirDatosDestino="";   descripcionServ="";   recibirDatosOlng=""; 
  recibirDatosOlat="";   recibirDatosDlng="";   recibirDatosDlat="";   distServ="";
  estadoBtn: string;  tipo:number=0;
  largo:any; ancho:any; alto:any; cantidad:any; peso:any; valorDeclarado:any;
  formgroup:FormGroup;
  user:any;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  archivoImg:string;

  @ViewChild('textDetalle') sInput;
  @ViewChild('filePicker') filePickerRef: ElementRef<HTMLInputElement>;

  validation_messages = {
    'valorDeclarado': [
      { type: 'required', message: 'Favor ingrese el costo del producto.' },
      //{ type: 'pattern', message: 'El valor es requerido!.' }
    ],
    'descripcionServ': [
      { type: 'required', message: 'Favor ingrese una descricion para el servicio' },
      //{ type: 'pattern', message: 'El valor es requerido!.' }
    ],
  };

  constructor(public formBuilder:FormBuilder,public HttpClient:HttpClient,private router:Router,
    private activatedRoute:ActivatedRoute,private alertController:AlertController, 
    private modalCtrl:ModalController,private sanitizer: DomSanitizer,public platform:Platform) { 
      
      this.activatedRoute.queryParams.subscribe(params=>{
        console.log(params)

      /*  if(params && params.datos){
          this.user=JSON.parse(params.datos);
          console.log(this.user, 'si llegue')
        }*/

        this.recibirDatosOrigen=params['origenServ'],
        this.recibirDatosOlng=params['Olng'],
        this.recibirDatosOlat=params['Olat'],
        this.recibirDatosDestino=params['destinoServ'],
        this.recibirDatosDlng=params['Dlng'],
        this.recibirDatosDlat=params['Dlat'],
        this.distServ=params['distServ'];
       // this.user=localStorage.getItem("UserCod");
        this.tipo=0;

      });
  }
 
  ngOnInit() {
  
      this.formgroup  = this.formBuilder.group({
      descripcionServ:['',[Validators.required,Validators.minLength(6)]],
      valorDeclarado:['',[Validators.required,Validators.minLength(3)]]

     }, {});

     if ((this.platform.is('mobile') && this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.isDesktop = true;
    }

  }


  /********************************************************************** */
  /**************   Guarda los datos de la solicitud   ****************** */
 async onSubmit(value: any): Promise<void>{
    this.submitted = true;

    if (this.formgroup.invalid) {
       return;
      }
 
     let url:string="https://newmovil.tacmosas.com/api/servicios";
  //let url:string="http://localhost:8000/services";

      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'x-id');


      let dataPost={
        'tipoServicio':this.tipo,
        'origenServ':this.recibirDatosOrigen,
        'destinoServ':this.recibirDatosDestino,
        'largo':this.largo,
        'ancho':this.ancho,
        'alto':this.alto,
        'peso':this.peso,
        'cantidad':this.cantidad,
        'valorDeclarado':this.formgroup.get('valorDeclarado').value,
        'descripcionServ':this.formgroup.get('descripcionServ').value,
        'origenLatitud':this.recibirDatosOlat,
        'origenLongitud':this.recibirDatosOlng,
        'destinoLatitud':this.recibirDatosDlat,
        'destinoLongitud':this.recibirDatosDlng,
        'distanciaServicio':this.distServ,
        'userServ':localStorage.getItem("UserCod"),
        'url_Imagen': this.archivoImg
      };
      
     
      let data:Observable<any>= this.HttpClient.post(url,dataPost,{headers:headers,responseType: 'text'})
      
        data.subscribe(async data=>{
         // console.log(dataPost);
          let info=JSON.parse(data);
          if(info['code']=="200"){
           // console.log(info,'sergi0');
            const alert = await this.alertController.create({
              header:'Solicitud',
              message:"Solicitud creada correctamente",
              buttons:['Ok']  
            })
            await alert.present();
              this.router.navigateByUrl('/inicio');   
          } else
          {
            const alert = await this.alertController.create({
              header:'Solicitud',
              message:"Solicitud no creada correctamente, se presento un erro",
              buttons:['Ok']  
            })
            await alert.present();
          
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
      ) ;  

  }

  //******************************************************************** */
  
    get frm() { return this.formgroup.controls; }

 
  //******************************************************************** */
  async presentAlertRadioTipo() {
    let alert = await this.alertController.create({
      header: 'Tipos de servicio',
      
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Cajas',
          value: '1 Cajas',
          //checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Sobres o Paquetes',
          value: '2 Sobres o Paquetes'
        },
       
        {
          name: 'radio3',
          type: 'radio',
          label: 'Otros',
          value: '3 Otros'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data:string) => {
           console.log('Confirm Cancel',data); 
           this.estadoBtn='0';
          }

        }, {
            text: 'Aceptar',
            handler: (data:string) => {
            console.log('Confirm Ok',data.substr(0));
            this.estadoBtn=data.substr(0,1);
            if (this.estadoBtn=="1"){
              this.presentAlertPromptCjas('','','','','');
            }
            if (this.estadoBtn=="2"){
              this.presentAlertPromptSbres('','');
            }
            if (this.estadoBtn=="3"){
             
              setTimeout(() => {
                this.tipo=3;
               
              }, 280);
            }
            }
          }
      ]
    });

      await alert.present();
     const {data}= await alert.onDidDismiss();

  }


//****************************************************************************************************** */


    async presentAlertPromptCjas(largo:any,ancho:any, alto:any, peso:any,cantidad:any) {
      const alert = await this.alertController.create({
        header: 'Ingrese la información de sus cajas',
        inputs: [
          {
            name: 'largo',
            type: 'number',
            value:largo,
            placeholder: 'Largo Cms:'

          },
          {
            name: 'ancho',
            type: 'number',
            value:ancho,
            placeholder: 'Ancho Cms:'
          },
          {
            name: 'alto',
            type: 'number',
            value:alto,
            placeholder: 'Alto Cms:'
            
          },
         
          {
            name: 'peso',
            type: 'number',
            value:peso,
            placeholder:'Peso Kg:',
          },
          {
            name: 'cantidad',
            type: 'number',
            value:cantidad,
            placeholder: 'Cantidad:'
          },
          
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Aceptar',
            handler: alert => {
              if(alert['largo']==''|| alert['ancho']==''|| alert['alto']==''|| alert['peso']==''|| alert['cantidad']==''){
                  this.presentAlertPromptCjas(alert['largo'], alert['ancho'], alert['alto'], alert['peso'], alert['cantidad']);  
              }
 
            }
          }
        ]
      });
  
      await alert.present();

      const {data}= await alert.onDidDismiss();
      let result=Object.values(data);
     
      
      this.doRefreshCjas('false', result[0]['largo'], result[0]['ancho'], result[0]['alto'],result[0]['peso'],result[0]['cantidad']);
     
     
    }

    /************************************************************************************* */
    async doRefreshCjas(event,largo,ancho,alto,peso,cantidad) {
      setTimeout(() => {
        this.tipo=1;
        this.largo=largo;
        this.ancho=ancho;
        this.alto=alto;
        this.cantidad=cantidad;
        this.peso=peso;    
      
      }, 280);
    
    }

   //************************************************************ */
 
   async presentAlertPromptSbres(cantidad:any,peso:any) {
    const alert = await this.alertController.create({
      header: 'Ingrese la información de sus Sobre o paquetes',
      inputs: [
        
        {
          name: 'cantidad',
          type: 'number',
          value:cantidad,
          placeholder:'Cantidad:',
        },
        {
          name: 'peso',
          type: 'number',
          value:peso,
          placeholder: 'Peso Kg:'
        },
       
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: alert => {
            
            //console.log('Confirm Ok', alert); 
            if(alert['cantidad']==''|| alert['peso']==''){
                console.log(alert['cantidad'], alert['peso']);
                this.presentAlertPromptSbres(alert['cantidad'], alert['peso']);             
            }
          }
        }
      ]
    });

    await alert.present();

    const {data}= await alert.onDidDismiss();
    let result=Object.values(data);
   
    
   this.doRefreshSbres('false', result[0]['cantidad'], result[0]['peso']);

    
  }

/************************************************************************** */
async doRefreshSbres(event,cantidad,peso) {

    setTimeout(() => {
      this.tipo=2;
      this.cantidad=cantidad;
      this.peso=peso;    
    
    }, 280);
      
  }
/*************************************************************************** */
/***** opcion de fotogragia  */

async alertRadioTipoFoto(event) {
  let alert = await this.alertController.create({
    header: 'Seleccione una opción para la imagen',
    
    inputs: [
      {
        name: 'radio1',
        type: 'radio',
        label: 'Cámara celular',
        value: '1',
        //checked: true
      },
      {
        name: 'radio2',
        type: 'radio',
        label: 'Galería celular',
        value: '2'
      }
     
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (data:string) => {
         console.log('Confirm Cancel',data); 
         this.estadoBtn='0';
        }

      }, {
          text: 'Aceptar',
          handler: (data:string) => {
          console.log('Confirm Ok',data.substr(0));
          this.estadoBtn=data.substr(0,1);
          if (this.estadoBtn=="1"){
            this.takePicture('Camera');
          }
          if (this.estadoBtn=="2"){
          this.takePicture('Photos');
          }
        
          }
        }
    ]
  });

    await alert.present();
   const {data}= await alert.onDidDismiss();

}

/****************************************************************************** */
/**tomar foto*** */

  async takePicture(type:string) {
    let tipo=type;

    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Plugins.Camera.getPhoto({
      quality: 85,
      allowEditing: false,
      saveToGallery:true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource[tipo],
      

    });

    //let nameImg="https://img.atrisoluciones.com.co/img/primerfoto.png"
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

    console.log(this.photo,'photo');

    this.archivoImg = image.dataUrl;
    console.log(this.archivoImg,'webPth');

   
      
  
    

  }


  

}
