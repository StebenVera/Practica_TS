"use strict";
exports.__esModule = true;
//Que es un Modulo
//Exportar .ts
var Exportar_1 = require("./Exportar"); //importat median de solo export 
var Exportar_2 = require("./Exportar");
console.log(Exportar_2["default"]);
var jg = new Exportar_1.Jugador();
jg.nombre = "Hola agregue un nuevo nombre";
Exportar_1.saludar();
var perro = { nombre: "mateo" };
