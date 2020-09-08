//Se pueden especificar parámetros tipados (el tipo de dato de los parámetros recibidos por la función)
//y también el tipo de dato que la función retorna
function sumar(valor1:number, valor2:number):number{
    return valor1 + valor2;

    //return "Hola"; error generado porque no puedo retornar un string en una función que retorna un valor tipo number
}

console.log(sumar(10,5));
//console.log(sumar('Juan',5)); genera un error porque no puedo asignar un string a una variable de tipo number

//A continuación se muestra la declaración de una función anónima
//Son parecidas a las de JavaScript con la diferencia de los parámetros tipados y el tipo de dato que retorna la función
const funcSumar = function(valor1:number, valor2:number):number{
    return valor1 + valor2;
}
console.log(funcSumar(4,9));

//El simbolo ? significa que dicho parámetro es opcional, y puede ser omitido a la hora de llamar la función
//Los parámetros opcionales deben ser los últimos parámetros definidos en la función
function Sumar2(valor1:number, valor2:number, valor3?:number):number{
    if(valor3){
        return valor1 + valor2 + valor3;        
    }else{
        return valor1 + valor2;
    }
}
console.log(Sumar2(5,4));
console.log(Sumar2(5,4,3));

//También puedo definir parámetros con valor por defecto, en caso de no proporcionar un valor para dicho parámetro a la hora de llamar la función
//Los valores por defecto deben de ser lo últimos parámetros definidos en la función
function Sumar3(valor1:number, valor2:number, valor3:number = 0):number{
    return valor1 + valor2 + valor3;
}
console.log(Sumar3(5,4));
console.log(Sumar3(5,4,3));

//Puedo definir parámetros rest colocando ... antes de su nombre. Estos parámetros me permiten recibir una lista indefinida de valores
//Los parámetros rest deben ser declarados al final de la función y no pueden tener valores por defecto
function Sumar4(...valores:number[]):number{
    let suma = 0;
    for(let x = 0; x < valores.length; x++){
        suma += valores[x];
    }
    return suma;
}

console.log(Sumar4(10,2,44,3));
console.log(Sumar4(1,2));
console.log(Sumar4());

//El operador spread es la operación inversa a los parámetros rest. Permite descomponer una estructura de datos en elementos individuales
//Se utiliza poniendo ... antes de una estructura de datos.
//Una función permite el uso del operador spread solo cuando todos sus parámetros son opcionales
function Sumar5(valor1?:number, valor2?:number, valor3?:number):number{
    return valor1 + valor2 + valor3;
}
const vec:number[] = [10,20,30];
const s = Sumar5(...vec);
console.log(s);

//Una función callback recibe un función como parámetro y dentro de la misma es llamada.

//Puedo declarar el callback de la siguiente manera
type Operacion1 = (x:number, y:number) => number;

function operar(valor1:number, valor2:number, func:Operacion1):number{
    return func(valor1,valor2);
}

console.log(operar(3,7,(x:number, y:number):number => {
    return x + y;
}));

console.log(operar(3,7,(x:number, y:number):number => {
    return x - y;
}));

console.log(operar(3,7,(x:number, y:number):number =>{
    return x * y;
}));

//Puedo tener variables con más de un tipo de dato
let edad:number|string;
edad = 34;
console.log(edad);
edad = '20 años';
console.log(edad);

//Puedo tener parámetros de una función que aceptan más de un tipo de dato
//A estos se les llaman parametros de tipo Unión
function Sumar6(valor1:number|string, valor2:number|string):number|string{
    if(typeof valor1 === 'number' && typeof valor2 === 'number'){
        return valor1 + valor2;
    }else{
        return valor1.toString() + valor2.toString();
    }
}

console.log(Sumar6(4,5));
console.log(Sumar6('Hola',2));
console.log(Sumar6('Hola','Mundo'));

//Acotación: todo lo visto con las funciones puede ser aplicado a los métodos de una clase
class Operacion{

    sumar(...valores:number[]){
        let suma = 0;
        for(let x = 0; x < valores.length; x++){
            suma += valores[x];
        }
        return suma;
    }
}

let op:Operacion;
op = new Operacion();
console.log(op.sumar(1,2,3));





