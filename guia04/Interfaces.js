//Las interfaces sirven para declarar una serie de métodos y propiedades que deben ser implementadas por una más clases
//Estas suplen la imposibilidad de la herencia multiple
//Aunque una clase herede de otra, puede implementar una o más interfaces
//Debo definir una implementación de los métodos y propiedades declarados en la interfaz, porque si no da un error de compilación
var PuntoPlano = /** @class */ (function () {
    function PuntoPlano(x, y) {
        this.x = x;
        this.y = y;
    }
    PuntoPlano.prototype.imprimir = function () {
        console.log("Punto en el plano (" + this.x + "," + this.y + ")");
    };
    return PuntoPlano;
}());
var PuntoEspacio = /** @class */ (function () {
    function PuntoEspacio(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    PuntoEspacio.prototype.imprimir = function () {
        console.log("Punto en el espacio (" + this.x + "," + this.y + "," + this.z + ")");
    };
    return PuntoEspacio;
}());
var puntoPlano1;
puntoPlano1 = new PuntoPlano(10, 4);
puntoPlano1.imprimir();
var puntoEspacio1;
puntoEspacio1 = new PuntoEspacio(20, 50, 60);
puntoEspacio1.imprimir();
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
    }
    Cuadrado.prototype.calcularSuperficie = function () {
        return this.lado * this.lado;
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        return this.lado * 4;
    };
    return Cuadrado;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
        this.superficie = this.calcularSuperficie();
        this.perimetro = this.calcularPerimetro();
    }
    Rectangulo.prototype.calcularSuperficie = function () {
        return this.base * this.altura;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return (this.base + this.altura) * 2;
    };
    return Rectangulo;
}());
//Este es una función que recibe como parametro una interfaz.
//Le puedo pasar objetos de diferentes clases que implementan dicha interfaz.
//Dentro de esta función solo puedo acceder a los métodos y propiedades definidos en la interfaz.
function imprimir(fig) {
    console.log("Perimetro: " + fig.perimetro);
    console.log("Superficie: " + fig.superficie);
}
var cuadrado1;
cuadrado1 = new Cuadrado(10);
console.log('Datos del cuadrado');
imprimir(cuadrado1);
var rectangulo1;
rectangulo1 = new Rectangulo(10, 5);
console.log('Datos del rectangulo');
imprimir(rectangulo1);
//Puedo crear objetos de una interfaz y no utilizo el operador new para crearlo
var punto1 = { x: 10, y: 20 };
console.log(punto1);
var punto2 = { x: 10, y: 20, z: 70 };
console.log(punto2);
var punto3 = { x: 23, y: 52, z: 45, J: 78 };
console.log(punto3);
