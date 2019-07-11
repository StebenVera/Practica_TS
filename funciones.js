//FUNCIONES EN JS 
function multiplicar(n1, n2) {
    return n1 * n2;
}
var resultado = multiplicar(1, 2);
console.log(resultado);
var cuenta2 = 100;
function aumentar(valor, cuenta) {
    console.log("valor de la cuenta dentro de la funcion", cuenta);
    cuenta = cuenta + valor; //cuenta hace referencia al cuenta que se paso como parametro
    cuenta2 += cuenta;
}
aumentar(200, 10);
console.log(cuenta2);
//Funciones en TS
// En las funciones de ts debo tambien ingresar el tipo
// de variables que voy a ingresar como parametros
// y el tipo de dato que retorna
function multiplicar2(x, y) {
    return x * y;
}
function mensaje() {
    console.log("Soy un mensaje");
}
var producto = multiplicar2(2, 3);
console.log("Valor del producto ", producto);
mensaje();
var nombre_comleto = function (nombre, apellido) {
    return nombre + apellido;
};
//en ts los parametros son obligatorios, mientras que en js
//si se permite pero si el valor viene vacio nos agrega undefined
var nombre = nombre_comleto("steben", "aragon");
console.log(nombre);
//podemos tener un parametro opcional
var nombre_comleto2 = function (nombre, apellido) {
    if (apellido) {
        return nombre + apellido;
    }
    else {
        return nombre;
    }
};
var nombre2 = nombre_comleto2("steben");
console.log(nombre2);
//parametros por default
var asignarP = function (nombre, numero, posicion) {
    if (posicion === void 0) { posicion = "defensa"; }
    return "el nombre es " + nombre + " con numero " + numero + " posicion " + posicion;
};
var jugador1 = asignarP("pedor", 10);
console.log(jugador1);
//parametros rest
var deportes = function (persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    return "A  " + persona + " le gusta los siguientes deportes " + deportes.join(",");
};
console.log(deportes("steben", "futbol", "beisbol"));
