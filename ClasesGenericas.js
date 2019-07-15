//Cremoas una clase generica
var Unificador = /** @class */ (function () {
    function Unificador() {
    }
    return Unificador;
}());
//La T simboliza un numero
var mi_unificador = new Unificador();
mi_unificador.valor = 20;
mi_unificador.sumar = function (valor1, valor2) { return valor1 + valor2; };
console.log(mi_unificador.sumar(2, 3));
