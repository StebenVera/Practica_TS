//variable funcion clase interfaz se pueden exportar

export  const pi:number = 3.14

 function saludar():void {
    console.log('Hola')
}

 class Jugador {
    nombre:string
}

 interface Mascota{
    nombre:string
}

export {Mascota,Jugador,saludar}

//Alias
function prueba(){
    console.log('Hola mundo')
}
//podemos exportar como un alias
export {prueba as palabras}
