//Las interfaces sirven para declarar una serie de métodos y propiedades que deben ser implementadas por una más clases
//Estas suplen la imposibilidad de la herencia multiple
//Aunque una clase herede de otra, puede implementar una o más interfaces
//Debo definir una implementación de los métodos y propiedades declarados en la interfaz, porque si no da un error de compilación

interface Punto{
    imprimir():void;
}

class PuntoPlano implements Punto{
    constructor(private x:number, private y:number){ }
    imprimir(){
        console.log(`Punto en el plano (${this.x},${this.y})`);
    }
}

class PuntoEspacio implements Punto{
    constructor(private x:number, private y:number, private z:number){ }
    imprimir(){
        console.log(`Punto en el espacio (${this.x},${this.y},${this.z})`);
    }
}

let puntoPlano1:PuntoPlano;
puntoPlano1 = new PuntoPlano(10,4);
puntoPlano1.imprimir();

let puntoEspacio1:PuntoEspacio;
puntoEspacio1 = new PuntoEspacio(20,50,60);
puntoEspacio1.imprimir();

interface Figura{
    superficie:number;
    perimetro:number;
    calcularSuperficie():number;
    calcularPerimetro():number;
}

class Cuadrado implements Figura{

    superficie:number;
    perimetro:number;

    constructor(private lado:number){
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
    }

    calcularSuperficie():number{
        return this.lado * this.lado;
    }

    calcularPerimetro():number{
        return this.lado * 4;
    }
}

class Rectangulo implements Figura{

    superficie:number;
    perimetro:number;

    constructor(private base:number, private altura:number){
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
    }

    calcularSuperficie():number{
        return this.base * this.altura;
    }

    calcularPerimetro():number{
        return (this.base + this.altura) * 2;
    }
}

//Este es una función que recibe como parametro una interfaz.
//Le puedo pasar objetos de diferentes clases que implementan dicha interfaz.
//Dentro de esta función solo puedo acceder a los métodos y propiedades definidos en la interfaz.
function imprimir(fig:Figura){    
    console.log(`Perimetro: ${fig.perimetro}`);
    console.log(`Superficie: ${fig.superficie}`);
}

let cuadrado1:Cuadrado;
cuadrado1 = new Cuadrado(10);
console.log('Datos del cuadrado');
imprimir(cuadrado1);

let rectangulo1:Rectangulo;
rectangulo1 = new Rectangulo(10,5);
console.log('Datos del rectangulo');
imprimir(rectangulo1);

//Las interfaces puden tener propiedades opciones, y se declaran de la misma manera que en las funciones
interface Punto2{
    x:number;
    y:number;
    z?:number;
}

//Puedo crear objetos de una interfaz y no utilizo el operador new para crearlo
let punto1:Punto2 = {x:10, y:20};
console.log(punto1);

let punto2:Punto2 = {x:10, y:20, z:70};
console.log(punto2);

//Una interfaz puede heredar de otra
interface Punto4D extends Punto2{
    J:number;
}

let punto3:Punto4D = {x:23, y:52, z:45, J:78};
console.log(punto3);

