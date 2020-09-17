import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto045';
  valor1:number;
  valor2:number;
  operacion:string = "ninguna";
  resultado:number;
}
