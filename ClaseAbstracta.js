//Una clase abstracta es una clase que sive de plantilla para otras clases
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
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.saluda = function () {
        console.log("Hola");
    };
    return Persona;
}());
var Hijos = /** @class */ (function (_super) {
    __extends(Hijos, _super);
    function Hijos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijos.prototype.metodoSobreescribir = function () {
        console.log('Hola Mundo');
    };
    return Hijos;
}(Persona));
var objeto = new Hijos();
objeto.saluda();
