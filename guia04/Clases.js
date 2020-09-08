var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre + " y edad: " + this.edad);
    };
    return Persona;
}());
var persona1;
persona1 = new Persona('Juan', 45);
persona1.imprimir();
var Dado = /** @class */ (function () {
    function Dado() {
    }
    //Si a un método o propiedad de una clase no le agrego un modificador de acceso, por defecto es public
    Dado.prototype.tirar = function () {
        this.generar();
    };
    Dado.prototype.generar = function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
        //Para acceder a una propiedad estática de una clase utilizo el nombre de la clase, en vez utilizar this
        Dado.tiradas++;
    };
    Dado.prototype.imprimir = function () {
        console.log("Sali\u00F3 el valor " + this.valor);
    };
    //Las propiedades estáticas de una clase, pertenecen solamente a ella 
    //y su valor es compartido por todas las instancias de dicha clase
    Dado.tiradas = 0;
    return Dado;
}());
var dado1 = new Dado();
dado1.tirar();
dado1.tirar();
dado1.imprimir();
var dado2 = new Dado();
dado2.tirar();
dado2.imprimir();
console.log("Cantidad de tiradas de dados: " + Dado.tiradas);
//Estas dos lineas de código dan error, porque la propiedad valor y el método generar son privados
//para acceso exclusivo dentro de la clase
/*
dado1.valor = 6;
dado1.generar();*/
//La clase persona de arriba puede ser declarada utilizando la siguiente notación abreviada
var Person = /** @class */ (function () {
    //Puedo declarar las propiedades de la clase directamente en el constructor de ella y solo ahí es permitido
    function Person(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Person.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre + " y edad: " + this.edad);
    };
    return Person;
}());
var persona2;
persona2 = new Person('Racardo', 45);
var Articulo = /** @class */ (function () {
    function Articulo(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Articulo.prototype.imprimir = function () {
        //Error producido al intentar asignar un valor una propiedad readonly
        //this.codigo = 7;
        console.log("C\u00F3digo: " + this.codigo + ", descripci\u00F3n: " + this.descripcion + ", precio: " + this.precio);
    };
    return Articulo;
}());
var articulo1;
articulo1 = new Articulo(1, 'papas', 12.5);
//articulo1.codigo = 7; //Error producido al intentar asignar un valor una propiedad readonly
articulo1.imprimir();
//Utilizando la notacion abreviada para definir la clase Articulo
var Article = /** @class */ (function () {
    function Article(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Article.prototype.imprimir = function () {
        console.log("C\u00F3digo: " + this.codigo + ", descripci\u00F3n: " + this.descripcion + ", precio: " + this.precio);
    };
    return Article;
}());
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    //Lo mismo sucede con los métodos estáticos, los cuales pueden ser accedidos con el nombre de la clase, 
    //ya sea dentro o fuera de esta
    Matematica.mayor = function (v1, v2) {
        if (v1 > v2) {
            return v1;
        }
        else {
            return v2;
        }
    };
    Matematica.menor = function (v1, v2) {
        if (v1 < v2) {
            return v1;
        }
        else {
            return v2;
        }
    };
    Matematica.aleatorio = function (inicio, fin) {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    };
    return Matematica;
}());
var x1 = Matematica.aleatorio(1, 10);
var x2 = Matematica.aleatorio(1, 10);
console.log("El mayor entre " + x1 + " y " + x2 + " es " + Matematica.mayor(x1, x2));
console.log("El menor entre " + x1 + " y " + x2 + " es " + Matematica.menor(x1, x2));
