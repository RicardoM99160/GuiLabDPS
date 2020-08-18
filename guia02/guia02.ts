console.log("Hola Mundo!!");

var full_nombre:string = "Ricardo Majano";
var age:number = 21;
var developer:boolean = true;

var skills:Array<string> = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray:number[] = [123,123,1213,1231];

enum ROLE{Employee, Manager, Admin, Developer}
var role:ROLE = ROLE.Employee

function hello():void{

}
function setName1(name:string):void{

}
function setName2(name:string, surName:string):string{
    return "string";
}

class Persona{
    first_name:string;
    last_name:string;

    //El símbolo ? en los parámetros de un constructor indican que este no es obligatorio
    constructor(_first_name?:string, _last_name?:string){
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    Saludo(){
        let emojis =  '(⌐■_■)';
        return `Saludos
        ${this.last_name}, ${this.first_name}
        Le enviamos un saludo desde la consola!
        ${emojis}
        `;
    }
}

let personaUno = new Persona();
let personaDos = new Persona("Ricardo");
let personaTres = new Persona("Ricardo", "Majano");

var a:string = "Ricardo";
var b = `Saludos a ti ${a},`;
console.log(b);

console.log(personaTres.Saludo());

interface MyPersona {
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let personaCuatro:MyPersona = {
    first_name: 'José',
    last_name: 'De Paz',
    twitter_account: '@JosePaz'
}

//Tenía un error al intentar transpilar esta clase de abajo, porque los get
//y set estan implementados a partir de ECMAscript 5
//solucion: tsc -t es5 "nombreArchivo".ts
class Person{
    first_name:string;
    last_name:string;
    twitter_user:string;

    constructor(){
        this.first_name = "Ric";
        this.last_name = "Maj";
        this.twitter_user = "@RicardoM";
    }
    
    get LastName(): string{
        return this.last_name;
    }
    set LastName(name:string){
        this.last_name = name;
    }
}

var myPerson = new Person();
myPerson.first_name = "Ricardo";
myPerson.LastName = "Majanon";
console.log(myPerson);
