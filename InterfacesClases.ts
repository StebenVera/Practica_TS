//Interfaces con clases
interface DatosPersonales{
    nombre:string,
    apellido:string
} 

class Estudiante implements DatosPersonales {
    nombre:string
    apellido = "dsmkdsll"
}

let estudiante = new Estudiante()
console.log(estudiante.apellido)