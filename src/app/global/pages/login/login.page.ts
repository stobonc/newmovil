import { Component} from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import{HttpClient, HttpHeaders }from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Validators,FormBuilder,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { NetworkStatus,Plugins } from '@capacitor/core';



const { Network } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  submitted=false; 
  loginForm:FormGroup;
  status: NetworkStatus;

  validation_messages = {
    'email': [
      { type: 'required', message: 'El correo es requerido.' },
      { type: 'pattern', message: 'Entre un correo valido.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };


  constructor(public navCtrl: NavController,public formBuilder:FormBuilder, private router:Router,public httpClient: HttpClient,
    private alertController:AlertController,private loadingCtrl:LoadingController,public menu: MenuController) {
   
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
  }, {});
  this.getStatus(); 
  }

  ionViewDidEnter() { 
    this.getStatus(); 
  }

  async getStatus() {
    try {
      this.status = await Network.getStatus();
     const estado = this.status['connected'];

      console.log(this.status);
      if(estado === false){
     
        const alert = await this.alertController.create({
        header:'Conexion Internet',
        message:'Favor revisar tu conexión a internet...',
        buttons:['Ok']
                
         });
       this.router.navigateByUrl('/walkthrough');
       await alert.present();

      }else{
       
        console.log('Conexion a Internet TRUE');

      }
      
     // console.log(this.status['connected']);
    } catch (e) { 
      console.log("Error", e)
     }
  }
  async onSubmit(value: any): Promise<void>{
    this.submitted = true;

    // Stop if the form validation has failed
    if (this.loginForm.invalid) {
        return;
    }
            
    //  if(this.registroData.correo !="" && this.registroData.nombre !=""
     // && this.registroData.telefono !="" && this.registroData.ciudad !="" && this.registroData.password !="" ){
   
    //  let url:string="https://atrisoluciones.com.co/api/usuarios/ingresar";
     let url:string="https://newmovil.tacmosas.com/api/usuarios/ingresar";

      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

    let dataPost={
      'user':this.loginForm.get('email').value,
      'password':this.loginForm.get('password').value

    };
    
    let data:Observable<any>= this.httpClient.post(url,dataPost,{headers:headers, responseType: 'text'})
    data.subscribe(async data => {
    console.log(data);

     let respuesta=JSON.parse(data);

    if(respuesta['estado']==1){
     
        const alert = await this.alertController.create({
        header:'Ingresar',
        message:'El usuario está inactivo',
        buttons:['Aceptar']
        
         });
       
       await alert.present();

      }else if(respuesta['resultPass']==true)
        {
          
        localStorage.setItem("UserCod",respuesta['User']);
          this.router.navigate(['/inicio']);

         
      }else{
        console.log(respuesta['estado']);
          const alert = await this.alertController.create({
            header:'Ingresar',
            message:'El usuario o contraseña no son correctos',
            buttons:['Aceptar']
            });  
            await alert.present();    
      }   
    });

     this.submitted = false;
     this.loginForm.reset();
   
}
  get frm() { return this.loginForm.controls; } 
   
}