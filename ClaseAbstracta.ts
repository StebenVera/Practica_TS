//Una clase abstracta es una clase que sive de plantilla para otras clases
//Siempre se va usar como una super clase 
abstract class Persona{
    abstract metodoSobreescribir():void

    saluda():void{
        console.log("Hola")
    }
}

class Hijos extends Persona{
    metodoSobreescribir(){
        console.log('Hola Mundo')
    }
}

let objeto = new Hijos()

objeto.saluda()
