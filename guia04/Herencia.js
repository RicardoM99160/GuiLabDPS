var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona2 = /** @class */ (function () {
    function Persona2(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona2.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad);
    };
    return Persona2;
}());
//Con el extend indico la clase padre de cual Hereda Empleado
//Una clase solo puede tener una clase padre de la que hereda
//La Subclase puede acceder a las propiedades protected y public de su padre
//El protected permite que a la hora de instanciar un objeto de una subclase, se puedan acceder a dichos atributos especificados en la clase padre 
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, sueldo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Sueldo: " + this.sueldo);
    };
    Empleado.prototype.pagaImpuestos = function () {
        if (this.sueldo > 5000) {
            console.log(this.nombre + " debe pagar impuestos");
        }
        else {
            console.log(this.nombre + " no debe de pagar impuestos");
        }
    };
    return Empleado;
}(Persona2));
var persona3 = new Persona2('Rucardo', 25);
persona3.imprimir();
var empleado1 = new Empleado('Recardo', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
//empleado1.nombre = "Facundo"; da error porque una vez declarado el valor de una propiedad protected, no puede ser modificado
var Operacion2 = /** @class */ (function () {
    function Operacion2(valor1, valor2) {
        this.resultado = 0;
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    Operacion2.prototype.imprimir = function () {
        console.log("Resultado: " + this.resultado);
    };
    return Operacion2;
}());
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(v1, v2) {
        return _super.call(this, v1, v2) || this;
    }
    Suma.prototype.operar = function () {
        this.resultado = this.valor1 + this.valor2;
    };
    return Suma;
}(Operacion2));
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(v1, v2) {
        return _super.call(this, v1, v2) || this;
    }
    Resta.prototype.operar = function () {
        this.resultado = this.valor1 - this.valor2;
    };
    return Resta;
}(Operacion2));
var suma1;
suma1 = new Suma(10, 4);
suma1.operar();
suma1.imprimir();
var resta1;
resta1 = new Resta(10, 4);
resta1.operar();
resta1.imprimir();
