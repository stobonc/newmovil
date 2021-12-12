import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';



@Component({
  selector: 'app-modal-search-ori',
  templateUrl: './modal-search-ori.page.html',
  styleUrls: ['./modal-search-ori.page.scss'],
})
export class ModalSearchOriPage implements OnInit {

  @Input()opcion;
  public origenServ="";
  public destinoServ="";
  public distServ="";

  @ViewChild('searchInput') sInput;
  @ViewChild('addresstext') addresstext: any;
  constructor(private modalCtrl:ModalController,private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });

   }

 async ngOnInit() {

        setTimeout(() => {
          this.sInput.setFocus();
        }, 280);
  }
  public search:string='';
  public dato:string="";
  googleAutoComplete= new google.maps.places.AutocompleteService();
  searchResult=new Array<any>();
 
  async searchDireccion(){
  
    if(!this.search.trim().length) return;

    var service = new google.maps.places.AutocompleteService();
    service.getPlacePredictions({ input: this.search, types: ['geocode'], 
    componentRestrictions:{ country: 'co' } },(predictions, status) =>{
          if (status == google.maps.places.PlacesServiceStatus.OK) {

              for (var i = 0, prediction; prediction = predictions[i]; i++) {
            // results.innerHTML += '<li>' + prediction.description + '</li>';

        this.searchResult=predictions;
      }
    }
});

    

  //console.log(event);
  }

  async salirSinArg(){
 this.modalCtrl.dismiss({
   'nombreUbicacion':''
 });
 
  }
   async salirConArg(event:any){
    console.log(event);
     
    if(this.opcion ==='1'){
    this.modalCtrl.dismiss({
        'nombreUbicacion':event.description,
        'id':event.place_id,
        'opcion':'1',
      });
   }
   else{
    this.modalCtrl.dismiss({
      'nombreUbicacion':event.description,
      'id':event.place_id,
      'opcion':'2',
    });
   }
  }

  /******************************************************* */

}
