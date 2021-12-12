import { Component, OnInit } from '@angular/core';
import { HttpHeaders ,HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-truckservruta',
  templateUrl: './truckservruta.page.html',
  styleUrls: ['./truckservruta.page.scss'],
})
export class TruckservrutaPage implements OnInit {
dataServicios:any[]=[];
cont:any;

  constructor(public HttpClient:HttpClient,private router:Router) { }

 
  ngOnInit(){

    this.onSubmit();

  }
   async onSubmit(){
   
    let url:string="https://newmovil.tacmosas.com/api/truckservices/show";


       const params = new HttpParams().set('estatus','1');
      
       let data:Observable<any>= this.HttpClient.get(url,{params})
       data.subscribe(async data=>{
        this.dataServicios=(data);
  
       console.log(this.dataServicios);

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

   this.ngOnDestroy;
  }

  

async entregarRuta(event){

console.log(event);

const extras:NavigationExtras={
  queryParams:{
    data: JSON.stringify(event),
  }

};


this.router.navigate(['/truckentregas'],extras);
this.ngOnDestroy();

}

async ngOnDestroy(){

    
}

}
