import { Component, OnInit } from '@angular/core';

//Agregando módulos
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
  //Variables
  sueldo: number;
  isss: number;
  renta: number;
  afp: number;
  sueldo_isss: number;
  sueldo_renta: number;
  sueldo_afp: number;
  sueldo_neto: number;

  constructor() { }

  ngOnInit(): void {
    this.inicializar();
  }

  //Función cálculos
  inicializar()
  {
    this.sueldo = 0;
    this.isss = 0.073;
    this.renta = 0.11;
    this.afp = 0.051;
    this.sueldo_isss = 0;
    this.sueldo_renta = 0;
    this.sueldo_afp = 0;
    this.sueldo_neto = 0;
  }
  
  calcular()
  {
    this.sueldo_isss = this.sueldo * this.isss;
    
    this.sueldo_renta = this.sueldo * this.renta;
    
    this.sueldo_afp = this.sueldo * this.afp;

    this.sueldo_neto = this.sueldo - this.sueldo_isss - this.sueldo_renta - this.sueldo_afp;
  }
  math = Math;
}

export class AppComponent {

}