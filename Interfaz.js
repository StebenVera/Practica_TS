var vaca2 = { raza: "cebu", ubicacion: "tolima" };
function setData(persona) {
    console.log("El nombre de la persona es " + persona.nombre + " y su apellido es " + persona.apellido);
}
var personaP = { nombre: "steben", apellido: "aragon" };
setData(personaP);
var juego = { nombre: "GTAV", consola: "PS4" };
juego.consola = "xbox"; // Cuando defino una propiedad como reanonly solo puedo asignarle un valor, es decir no puedo volver
var login;
login = function (email, password) {
    if (email === password) {
        return true;
    }
    else {
        return false;
    }
};
console.log(login("1234", "123"));
