//Get obtener información
//Set modificar información

class Trabajador{
    private   nombre:string

    get nombreCompleto():string{
        return this.nombre
    }
    set nCompleto(nombre_:string){
        this.nombre = nombre_
    }
}

let trabajador = new Trabajador()

trabajador.nCompleto = "Steben Vera"

console.log(trabajador.nombreCompleto)