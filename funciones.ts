//FUNCIONES EN JS 
function multiplicar(n1,n2) {
    return n1*n2
}
let resultado = multiplicar(1,2)
console.log(resultado)

let cuenta2 = 100 

function aumentar(valor,cuenta) {
    console.log("valor de la cuenta dentro de la funcion",cuenta)
    cuenta = cuenta+ valor; //cuenta hace referencia al cuenta que se paso como parametro
    cuenta2 += cuenta
}

aumentar(200,10)
console.log(cuenta2)

//Funciones en TS
// En las funciones de ts debo tambien ingresar el tipo
// de variables que voy a ingresar como parametros
// y el tipo de dato que retorna
function multiplicar2(x:number,y:number):number {
    return x *y
}

function mensaje():void
{
    console.log("Soy un mensaje")
}

let producto:number = multiplicar2(2,3)

console.log("Valor del producto ", producto)
mensaje()


let nombre_comleto = (nombre:string,apellido:string):string=>{
    return nombre + apellido
}

//en ts los parametros son obligatorios, mientras que en js
//si se permite pero si el valor viene vacio nos agrega undefined
let nombre:string = nombre_comleto("steben","aragon")
console.log(nombre)

//podemos tener un parametro opcional
let nombre_comleto2 = (nombre:string,apellido?:string):string=>{
    if(apellido){
        return nombre + apellido
    }else{
        return nombre
    }   
}

let nombre2:string = nombre_comleto2("steben")

console.log(nombre2)

//parametros por default
let asignarP = (nombre:string,numero:number,posicion:string="defensa"):string=>{
    return `el nombre es ${nombre} con numero ${numero} posicion ${posicion}`
}

let jugador1:string = asignarP("pedor",10)
console.log(jugador1)

//parametros rest

let deportes = (persona:string, ...deportes:string[]):string=>{
    return `A  ${persona} le gusta los siguientes deportes ${deportes.join(",")}`
}

console.log(deportes("steben","futbol","beisbol"))
