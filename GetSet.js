//Get obtener información
//Set modificar información
class Trabajador {
    get nombreCompleto() {
        return this.nombre;
    }
    set nCompleto(nombre_) {
        this.nombre = nombre_;
    }
}
let trabajador = new Trabajador();
trabajador.nCompleto = "Steben Vera";
console.log(trabajador.nombreCompleto);
