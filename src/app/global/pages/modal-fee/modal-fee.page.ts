import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-fee',
  templateUrl: './modal-fee.page.html',
  styleUrls: ['./modal-fee.page.scss'],
})
export class ModalFeePage implements OnInit {

  @Input()distancia;
  @Input()tipo;
  @Input()descripcion;
  
  @ViewChild('searchInput') sInput;

  

  formgroup:FormGroup;
 
  constructor(private modalCtrl:ModalController,public formBuilder:FormBuilder,private alertController:AlertController) { }

  async ngOnInit() {
    this.formgroup = this.formBuilder.group({
      largo: ['',[Validators.required,Validators.minLength(2)]],
      ancho:['',[Validators.required,Validators.minLength(2)]],
      alto:['',[Validators.required,Validators.minLength(2)]],
      peso:['',[Validators.required,Validators.minLength(2)]],
      cantidad:['',[Validators.required,Validators.minLength(2)]]
      
  }, {});

 
  }

  //********************************************************** */
 

  async salirSinArg(){
    this.modalCtrl.dismiss();
   
     }
}
