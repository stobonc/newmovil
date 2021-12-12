import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    
  }

  servicios(){

    this.route.navigate(['/maps-services']);
  }

}
