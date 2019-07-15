class Animales{
    nombre:string  //modificadores publico
    private tipo:String
    protected tipo2:String //Puede ser accedido desde la misma clase o de la subclase 
    constructor(nombre:string){
        this.nombre = nombre
    }
    caminar(distancia:number= 0):void{
        console.log(`El hombre ${this.nombre} camino ${distancia}`)
    }
}

class Serpiente extends Animales{
    longitud:number
    constructor(nombre:string,longitud:number){ //Queremos usar un constructor en esta nueva clase debemos usar el metodo super
        super(nombre) //Enviamos un argumento al constructor de la clase padre de la que estamos heredando
        this.longitud = longitud
    }
    caminar(distancia:number = 10):void{
        console.log(`La culebra se deslizo ${distancia}`)
        super.caminar(10)  //Envio el parametro a la funcion de caminar 
    }
}

let culebra = new Serpiente("Steben",10)
culebra.caminar()
let anima = new Animales("sad")
