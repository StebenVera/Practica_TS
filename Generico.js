//Que es un Generico
//Es una plantilla que nos ayuda a reusar codigo 
var casas_HP = ["Grindindor", "Hafelpad", "Sliferin"];
function sombrero(todas_las_casas) {
    var indice_radom = Math.floor(Math.random() * todas_las_casas.length);
    return todas_las_casas[indice_radom];
}
var materias = [20, 12, 40, 33];
function materias_semestre(materia) {
    var indice_radom = Math.floor(Math.random() * materia.length);
    return materia[indice_radom];
}
console.log(sombrero(casas_HP));
var mis_materias = materias_semestre(materias);
console.log('Debes cursar ' + mis_materias);
//Funcione Genericas
//Se suele acosutmbra asuar la letra T por convesion
//T simoboliza el tipo
function elemento_random(lista) {
    var indice_radom = Math.floor(Math.random() * lista.length);
    return lista[indice_radom];
}
var numeros = [1, 2, 3, 4, 4];
var mi_numero = elemento_random(numeros);
console.log(mi_numero);
