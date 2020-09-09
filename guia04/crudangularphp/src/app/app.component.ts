import { Component } from '@angular/core';
//import { Alumno } from './models/alumno';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudangularphp';

  articulos = null;
  validado = false;
  descripcionV:boolean = true;
  proveedorV:boolean = true;
  fabricanteV:boolean = true;

  art = {
    codigo:0,
    descripcion:null,
    precio:null,
    proveedor:null,
    fabricante:null
  }

  constructor(private articulosServicio:ArticulosService){ }

  ngOnInit(){
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta(){
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
        this.art = {codigo:0, descripcion:null, precio:null, proveedor:null, fabricante:null};
      }
    });
  }

  baja(codigo){
    if(confirm('¿Esta seguro de eliminar el Registro?')){
      this.articulosServicio.baja(codigo).subscribe(datos => {  
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }
  }

  modificacion(){
    this.articulosServicio.modificacion(this.art).subscribe(datos => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
        this.art = {codigo:0, descripcion:null, precio:null, proveedor:null, fabricante:null};
      }
    });
  }

  seleccionar(codigo){
    this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros(){
    return true;
  }

  /*validar(metodo:string){
    if(this.art.descripcion == null || this.art.descripcion == '' || this.art.precio == 0 || this.art.precio == null || this.art.proveedor == null || this.art.proveedor == '' || this.art.fabricante == null || this.art.fabricante == '' ){
      alert('Todos los datos son requeridos, no debe dejar ninguno vacío');
    }else{
      switch(metodo){
        case 'alta':
          this.alta();
        break;
        case 'modificacion':
          this.modificacion();
        break;
      }
    }
  }*/

  validar(cadena:string, tipo:string, funcion:string){
    if(cadena != ''){
      switch(tipo){
        case 'desc':
          if(isNaN(Number(cadena))){
            this.descripcionV = true;
          }else{
            this.descripcionV = false;
          }
        break;
        case 'prov':
          if(isNaN(Number(cadena))){
            this.proveedorV = true;
          }else{
            this.proveedorV = false;
          }
        break;
        case 'fab':
          if(isNaN(Number(cadena))){
            this.fabricanteV = true;
          }else{
            this.fabricanteV = false;
          }
        break;
      }
    }else{
      if(this.art.descripcion == null || this.art.descripcion == '' || this.art.precio == 0 || this.art.precio == null || 
        this.art.proveedor == null || this.art.proveedor == '' || this.art.fabricante == null || this.art.fabricante == '' 
        || !this.descripcionV || !this.proveedorV || !this.fabricanteV){
        alert('Llene todos los campos de forma correcta');
      }else{
        switch(funcion){
          case 'alta':
            this.alta();
          break;
          case 'modificacion':
            this.modificacion();
          break;
        }
      }
    }
  }
}
