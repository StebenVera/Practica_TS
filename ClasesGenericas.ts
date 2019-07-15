//Cremoas una clase generica
class Unificador <T> {
    valor :T
    sumar :  (valor1:T,valor2:T)=>T

}

//La T simboliza un numero

let mi_unificador = new Unificador<number>()

mi_unificador.valor =20
mi_unificador.sumar = function (valor1,valor2) {return valor1+valor2}
console.log(mi_unificador.sumar(2,3))