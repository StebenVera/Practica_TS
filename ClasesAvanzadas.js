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
var Animales = /** @class */ (function () {
    function Animales(nombre) {
        this.nombre = nombre;
    }
    Animales.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("El hombre " + this.nombre + " camino " + distancia);
    };
    return Animales;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre, longitud) {
        var _this = _super.call(this, nombre) //Enviamos un argumento al constructor de la clase padre de la que estamos heredando
         || this;
        _this.longitud = longitud;
        return _this;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 10; }
        console.log("La culebra se deslizo " + distancia);
        _super.prototype.caminar.call(this, 10);
    };
    return Serpiente;
}(Animales));
var culebra = new Serpiente("Steben", 10);
culebra.caminar();
