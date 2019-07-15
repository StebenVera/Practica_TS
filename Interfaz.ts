interface vaca{
    raza:string,
    ubicacion:string
}

let vaca2:vaca = {raza:"cebu",ubicacion:"tolima"}

interface Persona {
    nombre:string,
    apellido:string,
    edad ?:string //Pata decir que un parametro es Opcional
}


interface Games{
    readonly nombre:string,
    readonly consola:string
}




function setData(persona:Persona) {
console.log(`El nombre de la persona es ${persona.nombre} y su apellido es ${persona.apellido}`)
}

let personaP={nombre:"steben",apellido:"aragon"}
setData(personaP)

let juego:Games = {nombre:"GTAV",consola:"PS4"}

juego.consola = "xbox"  // Cuando defino una propiedad como reanonly solo puedo asignarle un valor, es decir no puedo volver
                        // a reasignarle otro valor

interface Login {
    (email,password):boolean
}

let login: Login 

login = function(email:string,password:string){
    if(email === password){
        return true
    }else{
        return false
    }
}

console.log(login("1234","123"))