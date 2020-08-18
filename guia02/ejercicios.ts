//EJERCICIO 1 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 1 -----------------------------------------------------------------------------\n");
class Rombo{
    diagonalVertical:number;
    diagonalHorizontal:number;
    area:number;

    constructor(diagonalV:number, diagonalH:number){
        this.diagonalVertical = diagonalV;
        this.diagonalHorizontal = diagonalH;
    }

    Area():number{
        this.area = this.diagonalHorizontal*this.diagonalVertical;
        return this.area;
    }
}

let rombo1 = new Rombo(15,20); 
console.log("El area calculada es: " + rombo1.Area());

//EJERCICIO 2 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 2 -----------------------------------------------------------------------------\n");

interface spiderman {
    nombre: string;
    poderes: Array<string>;
}

let superheroe:spiderman = {
    nombre:'Peter Parker',
    poderes:['Trepar','Fuerza','Agilidad','Telas de araña']
}

console.log(superheroe);

//EJERCICIO 3 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 3 -----------------------------------------------------------------------------\n");

class Empleado {
    nombre:string;
    salario:number;
    iva:number;
    deducSalarial:number;

    constructor(_nombre:string, _salario:number){
        this.nombre = _nombre;
        this.salario = _salario;
        this.iva = 0.13;
    }
    
        DeducSalarial():number{
        this.deducSalarial = this.salario - (this.salario*this.iva);
        return this.deducSalarial;
    }
}

let empleado = new Empleado('Ricardo',300); 
console.log("El salario después de los descuentos es: " + empleado.DeducSalarial());

//EJERCICIO 4 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 4 -----------------------------------------------------------------------------\n");

class Calculadora{
    numero1:number;
    numero2:number;
    suma:number;
    resta:number;
    division:number;
    multiplicacion:number;

    constructor(num1:number, num2:number){
        this.numero1 = num1;
        this.numero2 = num2;
    }

    OperacionesBasicas(){
        this.suma = this.numero1 + this.numero2;
        this.resta = this.numero1 - this.numero2;
        this.multiplicacion = this.numero1 * this.numero2;
        this.division = this.numero1 / this.numero2;
        console.log(`Resultado de las operaciones básicas:
        numero1 + numero2 = ${this.suma}
        numero1 - numero2 = ${this.resta}
        numero1 * numero2 = ${this.multiplicacion}
        numero1 / numero2 = ${this.division}
        `)
    }
}

let calculadora1 = new Calculadora(10,5);
calculadora1.OperacionesBasicas();