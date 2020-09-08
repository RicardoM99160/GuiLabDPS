class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}

let persona1:Persona;
persona1 = new Persona('Juan',45);
persona1.imprimir();

class Dado{
    private valor:number;

    //Las propiedades estáticas de una clase, pertenecen solamente a ella 
    //y su valor es compartido por todas las instancias de dicha clase
    static tiradas:number = 0;

    //Si a un método o propiedad de una clase no le agrego un modificador de acceso, por defecto es public
    tirar(){
        this.generar();
    } 

    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;

        //Para acceder a una propiedad estática de una clase utilizo el nombre de la clase, en vez utilizar this
        Dado.tiradas++;
    }

    imprimir(){
        console.log(`Salió el valor ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.tirar();
dado1.imprimir();

let dado2 = new Dado();
dado2.tirar();
dado2.imprimir();

console.log(`Cantidad de tiradas de dados: ${Dado.tiradas}`);

//Estas dos lineas de código dan error, porque la propiedad valor y el método generar son privados
//para acceso exclusivo dentro de la clase
/*
dado1.valor = 6;
dado1.generar();*/

//La clase persona de arriba puede ser declarada utilizando la siguiente notación abreviada

class Person{

    //Puedo declarar las propiedades de la clase directamente en el constructor de ella y solo ahí es permitido
    
    constructor(public nombre:string, public edad:number){ }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
    }
}

let persona2:Person;
persona2 = new Person('Racardo', 45);

class Articulo{
    
    //El modificador de acceso readonly permite que se le asigne una sola vez el valor a una propiedad, 
    //la cual posteriormente solo puede ser leida y no modificada en ningun lado aun dentro de la misma clase

    readonly codigo:number;
    descripcion:string;
    precio:number;

    constructor(codigo:number, descripcion:string, precio:number){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    imprimir(){
        //Error producido al intentar asignar un valor una propiedad readonly
        //this.codigo = 7;
        console.log(`Código: ${this.codigo}, descripción: ${this.descripcion}, precio: ${this.precio}`);
    }
}

let articulo1:Articulo;
articulo1 = new Articulo(1,'papas',12.5);
//articulo1.codigo = 7; //Error producido al intentar asignar un valor una propiedad readonly
articulo1.imprimir();

//Utilizando la notacion abreviada para definir la clase Articulo
class Article {

    constructor(readonly codigo:number, public descripcion:string, public precio:number){ }

    imprimir(){
        console.log(`Código: ${this.codigo}, descripción: ${this.descripcion}, precio: ${this.precio}`);
    }
}

class Matematica{

    //Lo mismo sucede con los métodos estáticos, los cuales pueden ser accedidos con el nombre de la clase, 
    //ya sea dentro o fuera de esta
    static mayor(v1:number, v2:number):number{
        if(v1>v2){
            return v1;
        }else{
            return v2;
        }
    }

    static menor(v1:number, v2:number):number{
        if(v1 < v2){
            return v1;
        }else{
            return v2;
        }
    }

    static aleatorio(inicio:number, fin:number):number{
        return Math.floor((Math.random()*(fin+1-inicio))+inicio);
    }
}


let x1 = Matematica.aleatorio(1,10);
let x2 = Matematica.aleatorio(1,10);

console.log(`El mayor entre ${x1} y ${x2} es ${Matematica.mayor(x1,x2)}`);
console.log(`El menor entre ${x1} y ${x2} es ${Matematica.menor(x1,x2)}`);


