//TIPOS DE VARIABLES
let equipo = "Real madrid2"
const pi = 3.14  //constantes

//TIPADO formato boolean
let soy_alto:boolean = false;  
let soy_fan:boolean = true;
console.log(soy_alto.valueOf())  //--> nos permite ver que valor tiene la variable

//Tipado de tipo numero
let numero:Number = 20; //creamos un tipo numero 

//Tipado de tipo string

let palabra:string = "Esta es una cadena"
let poema:string = `sadads
sdasdañdsaads
${numero}`

console.log(poema.charAt(0)) //toma la letra segun una posicion
console.log(poema.toUpperCase()) //COVIENRTE TODAS A MAYUSCULAS

//Tipos de array
let numeros:number[] = [1,2,3,4,5];
let notas:Array <number>= [1,2]
console.log(numeros)
numeros.pop()
console.log(numeros)

let equipo: string[]= ["casillas","buffon"]
for (let contador = 0; contador <equipo.length; contador++) {
    const element = equipo[contador];
    console.log(element)
    
}

//TIPO TUPLAS 
let vector:[number,number]
let vector2:[number,number]
vector = [2,5]
vector2 = [5,10]

//
let vector_resultanten:[number,number] 
vector_resultanten = [vector[0]+vector2[0],vector[1]+vector2[1]]

console.log(vector_resultanten)

//TIPO ANY recibe cualquier tipo de dato
let valor:any = 0;
let lista:any[] = [20,true] //Nos permite tener cualquier valor en un vector
console.log("valor",valor)

//TIPO VOID  solo pueden recibir dos valors undefined y null 
let inutil:void = undefined;
let vacio:void = null;

