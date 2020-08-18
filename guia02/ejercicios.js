//EJERCICIO 1 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 1 -----------------------------------------------------------------------------\n");
var Rombo = /** @class */ (function () {
    function Rombo(diagonalV, diagonalH) {
        this.diagonalVertical = diagonalV;
        this.diagonalHorizontal = diagonalH;
    }
    Rombo.prototype.Area = function () {
        this.area = this.diagonalHorizontal * this.diagonalVertical;
        return this.area;
    };
    return Rombo;
}());
var rombo1 = new Rombo(15, 20);
console.log("El area calculada es: " + rombo1.Area());
//EJERCICIO 2 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 2 -----------------------------------------------------------------------------\n");
var superheroe = {
    nombre: 'Peter Parker',
    poderes: ['Trepar', 'Fuerza', 'Agilidad', 'Telas de araña']
};
console.log(superheroe);
//EJERCICIO 3 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 3 -----------------------------------------------------------------------------\n");
var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
        this.iva = 0.13;
    }
    Empleado.prototype.DeducSalarial = function () {
        this.deducSalarial = this.salario - (this.salario * this.iva);
        return this.deducSalarial;
    };
    return Empleado;
}());
var empleado = new Empleado('Ricardo', 300);
console.log("El salario después de los descuentos es: " + empleado.DeducSalarial());
//EJERCICIO 4 -----------------------------------------------------------------------------
console.log("\nEJERCICIO 4 -----------------------------------------------------------------------------\n");
var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    Calculadora.prototype.OperacionesBasicas = function () {
        this.suma = this.numero1 + this.numero2;
        this.resta = this.numero1 - this.numero2;
        this.multiplicacion = this.numero1 * this.numero2;
        this.division = this.numero1 / this.numero2;
        console.log("Resultado de las operaciones b\u00E1sicas:\n        numero1 + numero2 = " + this.suma + "\n        numero1 - numero2 = " + this.resta + "\n        numero1 * numero2 = " + this.multiplicacion + "\n        numero1 / numero2 = " + this.division + "\n        ");
    };
    return Calculadora;
}());
var calculadora1 = new Calculadora(10, 5);
calculadora1.OperacionesBasicas();
