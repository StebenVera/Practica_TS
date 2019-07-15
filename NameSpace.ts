//Ayuda a evitar errores por tener el mismo nombre para una variables en distintos archivos
//namespace = modulo interno
//modulo = modulo externo
namespace EspacioTrabajo{
    export class Persona{
        nombre:string
    }
    export let repetida:number = 2
    console.log("Hello")
}

let persona = new EspacioTrabajo.Persona()

persona.nombre = "Marcos"


console.log(persona)

console.log(EspacioTrabajo.repetida)