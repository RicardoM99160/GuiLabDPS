import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {
  title:string;
  gasolina:string[];
  tipoGasolina:string;
  cantidad:number;
  totalPagar:number;

  constructor() { }

  ngOnInit(): void {
    this.title = "GASOFAST";
    this.gasolina = ["Diesel", "Regular", "Especial"];
    this.tipoGasolina = "Ninguno";
    this.cantidad = 0.05;
    this.totalPagar = 0;
  }

  calcularPago(){
    switch(this.tipoGasolina){
      case "Diesel":
        this.totalPagar = this.cantidad*3.96;
      break;
      case "Regular":
        this.totalPagar = this.cantidad*4.05;
      break;
      case "Especial":
        this.totalPagar = this.cantidad*4.25;
      break;

    }
  }

  incrementar(){
    this.cantidad += 0.05;
    this.calcularPago();
  }
  decrementar(){
    this.cantidad -= 0.05;
    this.calcularPago();
  }
}
export class AppComponent{

}
