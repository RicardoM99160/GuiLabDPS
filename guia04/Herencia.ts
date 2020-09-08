class Persona2{

    protected nombre:string;
    protected edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

//Con el extend indico la clase padre de cual Hereda Empleado
//Una clase solo puede tener una clase padre de la que hereda
//La Subclase puede acceder a las propiedades protected y public de su padre
//El protected permite que a la hora de instanciar un objeto de una subclase, se puedan acceder a dichos atributos especificados en la clase padre 
class Empleado extends Persona2{

    private sueldo:number;

    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }

    pagaImpuestos(){
        if(this.sueldo > 5000){
            console.log(`${this.nombre} debe pagar impuestos`);
        }else{
            console.log(`${this.nombre} no debe de pagar impuestos`);
        }
    }
}

const persona3 = new Persona2('Rucardo', 25);
persona3.imprimir();

const empleado1 = new Empleado('Recardo',22,7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
//empleado1.nombre = "Facundo"; da error porque una vez declarado el valor de una propiedad protected, no puede ser modificado

//Las clases abstractas sirven para definir un conjunto de propiedades y métodos que será utilizado por un grupo de clases
//No se pueden crear objetos de una clase abstracta y por lo general esta es heredada
abstract class Operacion2{
    public valor1:number;
    public valor2:number;
    public resultado:number = 0;

    constructor(valor1:number, valor2:number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    //El método operar es abstracto y es obligación que todas las clases que heredan de esta clase abstracta lo implementen
    abstract operar():void;

    imprimir(){
        console.log(`Resultado: ${this.resultado}`);
    }
}

class Suma extends Operacion2{

    constructor(v1:number, v2:number){
        super(v1,v2);
    }

    operar(){
        this.resultado = this.valor1 + this.valor2;
    }
}

class Resta extends Operacion2{

    constructor(v1:number, v2:number){
        super(v1,v2);
    }

    operar(){
        this.resultado = this.valor1 - this.valor2;
    }
}

let suma1:Suma;
suma1 = new Suma(10,4);
suma1.operar();
suma1.imprimir();

let resta1:Resta;
resta1 = new Resta(10,4);
resta1.operar();
resta1.imprimir();