//Que es un Generico
//Es una plantilla que nos ayuda a reusar codigo 
let casas_HP:string[] = ["Grindindor","Hafelpad","Sliferin"]

function sombrero (todas_las_casas:string[]):string{
    let indice_radom:number = Math.floor(Math.random()*todas_las_casas.length)
    return  todas_las_casas[indice_radom]
}

let materias:number[] = [20,12,40,33]

function materias_semestre(materia:number[]):number{
    let indice_radom:number = Math.floor(Math.random()*materia.length)
    return materia[indice_radom]
}
console.log(sombrero(casas_HP))

let mis_materias:number = materias_semestre(materias)

console.log('Debes cursar '+mis_materias)

//Funcione Genericas
//Se suele acosutmbra asuar la letra T por convesion
//T simoboliza el tipo
function elemento_random<T>(lista:T[]):T{
    let indice_radom = Math.floor(Math.random()*lista.length)
    return lista[indice_radom]
}

//Como T simboliza el tipo de dato en este caso simboliza el tipo de datos 
let numeros:number[] = [1,2,3,4,4]
let mi_numero:number = elemento_random(numeros)


console.log(mi_numero)


//Interfaz Generica
interface Datos<T>{
    nombre:T
}

let persona:Datos<string> ={nombre:"juan"}
let persona2:Datos<number> = {nombre:2}