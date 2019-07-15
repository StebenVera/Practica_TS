interface Perro {
    nombre:string
    raza :string
}

function adoptar(mascota:Perro):void {
    console.log(`Yo adopte a ${mascota.nombre}`)
}

let miMascota = {nombre:"tobby", raza:"labradsor"} // Podemos agragra otro parametro mas
let miMascota4:Perro={nombre:"Mateo",raza:"beagle"}  // como miMascota4 es de tipo perro no podemos agregarle otra 
adoptar(miMascota)
adoptar(miMascota4)


//Atributos opcionales en nuestras interfaces

interface Casa {
    ancho:number,
    largo:number,
    //Creamos el atributo opcional
    alto ?: number
}

function dimesiones(casa:Casa){
    let area:number = casa.ancho * casa.largo
    if(casa.alto)
    {
        return "El area de tu casa es"+area.toString();
    }else{
        return "La propiedad altua no existe"
    }
   
}


console.log(dimesiones({ancho:10,largo:10,alto:10}))

//*****************************/
//Propiedades de solo lectura */
//*****************************/

interface Punto {
    readonly coordenadax:number,  //Solo lectura
    readonly coordenaday:number
}

let punto:Punto = {coordenadax:10,coordenaday:20}

//punto.coordenadax = 20 //Este atributo es de solo lectura y solo puede ser inicializado una vez 

//*****************************/
//Interfaces para funciones   */
//*****************************/
interface Login{
    (email:string,password:string):boolean
}

 let session:Login

  session =    function (email:string,password:string){
    if(email == password)
    {
      
        return true
    }
    else {
        return false
    }
    
}

console.log(session("123","123"))

let  session2 = (x:number)=>{

}