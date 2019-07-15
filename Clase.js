var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro = /** @class */ (function () {
    function Carro(marca, fechaCreacion, color, puertas, kilometraje) {
        this.marca = marca;
        this.fechaCreacion = fechaCreacion;
        this.color = color;
        this.puertas = puertas;
        this.kilometraje = kilometraje;
        console.log(this, "This of document");
    }
    Carro.prototype.kilometrajeT = function (numero) {
        console.log("Acumulador de kilometraje ", this.kilometraje = this.kilometraje + numero);
    };
    return Carro;
}());
//*****Creamos instancia de nuestral clase carro******/
var carro = new Carro("audi", "27-08-18", "rojo", 4, 100);
console.log(carro.color);
console.log(carro.kilometrajeT(50));
//***Herencia***/
var Consecionario = /** @class */ (function (_super) {
    __extends(Consecionario, _super);
    function Consecionario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Consecionario;
}(Carro));
var conse = new Consecionario("audi", "27-08-18", "rojo", 4, 100);
