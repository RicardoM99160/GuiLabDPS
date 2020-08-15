console.log("Hola Mundo!!");
var full_nombre = "Ricardo Majano";
var age = 21;
var developer = true;
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
function hello() {
}
function setName1(name) {
}
function setName2(name, surName) {
    return "string";
}
var Persona = /** @class */ (function () {
    //El símbolo ? en los parámetros de un constructor indican que este no es obligatorio
    function Persona(_first_name, _last_name) {
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    Persona.prototype.Saludo = function () {
        var emojis = '(⌐■_■)';
        return "Saludos\n        " + this.last_name + ", " + this.first_name + "\n        Le enviamos un saludo desde la consola!\n        " + emojis + "\n        ";
    };
    return Persona;
}());
var personaUno = new Persona();
var personaDos = new Persona("Ricardo");
var personaTres = new Persona("Ricardo", "Majano");
var a = "Ricardo";
var b = "Saludos a ti " + a + ",";
console.log(b);
console.log(personaTres.Saludo());
var personaCuatro = {
    first_name: 'José',
    last_name: 'De Paz',
    twitter_account: '@JosePaz'
};
//Tenía un error al intentar transpilar esta clase de abajo, porque los get
//y set estan implementados a partir de ECMAscript 5
//solucion: tsc -t es5 "nombreArchivo".ts
var Person = /** @class */ (function () {
    function Person() {
        this.first_name = "Ric";
        this.last_name = "Maj";
        this.twitter_user = "@RicardoM";
    }
    Object.defineProperty(Person.prototype, "LastName", {
        get: function () {
            return this.last_name;
        },
        set: function (name) {
            this.last_name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Ricardo";
myPerson.LastName = "Majanon";
console.log(myPerson);
