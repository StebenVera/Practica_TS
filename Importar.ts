//Que es un Modulo
//Exportar .ts
import {Jugador,Mascota,saludar} from './Exportar' //importat median de solo export 
import {pi} from './Exportar'
console.log(pi)
let jg = new Jugador()
jg.nombre = "Hola agregue un nuevo nombre"

saludar()

let perro:Mascota = {nombre:"mateo"}


//Alias
import{palabras } from './Exportar'