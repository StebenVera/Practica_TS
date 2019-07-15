function adoptar(mascota) {
    console.log("Yo adopte a " + mascota.nombre);
}
var miMascota = { nombre: "tobby", raza: "labradsor" }; // Podemos agragra otro parametro mas
var miMascota4 = { nombre: "Mateo", raza: "beagle" }; // como miMascota4 es de tipo perro no podemos agregarle otra 
adoptar(miMascota);
adoptar(miMascota4);
function dimesiones(casa) {
    var area = casa.ancho * casa.largo;
    if (casa.alto) {
        return "El area de tu casa es" + area.toString();
    }
    else {
        return "La propiedad altua no existe";
    }
}
console.log(dimesiones({ ancho: 10, largo: 10, alto: 10 }));
var punto = { coordenadax: 10, coordenaday: 20 };
var session;
session = function (email, password) {
    if (email == password) {
        return true;
    }
    else {
        return false;
    }
};
console.log(session("123", "123"));
var session2 = function (x) {
};
