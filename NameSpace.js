//Ayuda a evitar errores por tener el mismo nombre para una variables en distintos archivos
//namespace = modulo interno
//modulo = modulo externo
var EspacioTrabajo;
(function (EspacioTrabajo) {
    var Persona = /** @class */ (function () {
        function Persona() {
        }
        return Persona;
    }());
    EspacioTrabajo.Persona = Persona;
    EspacioTrabajo.repetida = 2;
    console.log("Hello");
})(EspacioTrabajo || (EspacioTrabajo = {}));
var persona = new EspacioTrabajo.Persona();
persona.nombre = "Marcos";
console.log(persona);
console.log(EspacioTrabajo.repetida);
