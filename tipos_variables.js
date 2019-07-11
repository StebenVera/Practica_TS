//TIPOS DE VARIABLES
var equipo = "Real madrid2";
var pi = 3.14; //constantes
//TIPADO formato boolean
var soy_alto = false;
var soy_fan = true;
console.log(soy_alto.valueOf()); //--> nos permite ver que valor tiene la variable
//Tipado de tipo numero
var numero = 20; //creamos un tipo numero 
//Tipado de tipo string
var palabra = "Esta es una cadena";
var poema = "sadads\nsdasda\u00F1dsaads\n" + numero;
console.log(poema.charAt(0)); //toma la letra segun una posicion
console.log(poema.toUpperCase()); //COVIENRTE TODAS A MAYUSCULAS
//Tipos de array
var numeros = [1, 2, 3, 4, 5];
var notas = [1, 2];
console.log(numeros);
numeros.pop();
console.log(numeros);
var equipo = ["casillas", "buffon"];
for (var contador = 0; contador < equipo.length; contador++) {
    var element = equipo[contador];
    console.log(element);
}
//TIPO TUPLAS 
var vector;
var vector2;
vector = [2, 5];
vector2 = [5, 10];
//
var vector_resultanten;
vector_resultanten = [vector[0] + vector2[0], vector[1] + vector2[1]];
console.log(vector_resultanten);
//TIPO ANY recibe cualquier tipo de dato
var valor = 0;
var lista = [20, true]; //Nos permite tener cualquier valor en un vector
console.log("valor", valor);
//TIPO VOID  solo pueden recibir dos valors undefined y null 
var inutil = undefined;
var vacio = null;
