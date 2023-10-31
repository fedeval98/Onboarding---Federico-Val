/*
//Ejercicio 1
console.log("Ejercicio 1")
const numeroIngresado = Number(prompt("Ingrese un numero del 1 al 100"))
for ( let i = numeroIngresado; i > 0; i--){
    console.log (i)
}

//Ejercicio 2
console.log("Ejercicio 2")
const numeroIngresado2 = Number(prompt("Ingrese un numero del 1 al 10"))
for ( let i = 1; i <= 10; i++){
    console.log (`${i} x ${numeroIngresado2} = ${i*numeroIngresado2}`)
}

//Ejercicio 3
console.log("Ejercicio 3")
let valor = Number(prompt("Ingrese un numero"))
let contador = 0
while (valor > 0){
    contador+=valor
    valor = Number(prompt("Ingrese un numero"))
}
console.log(`La suma total es ${contador}`)

//Ejercicio 4
console.log("Ejercicio 4")
let contador2 = 0
let valor2 = null
do{
    valor2 = Number(prompt("Ingrese un numero"))
    contador2+=valor2
    console.log(`El numero sumado es: ${valor2} y la suma total es ${contador2}`)
}   while (valor2 !== 0){
    }

//Ejercicio 5
console.log("Ejercicio 5")
let intentos = 0
let valor3 = null
do{
    valor3 = Number(prompt("Ingrese un valor"))
    intentos++
    switch (true){
        case valor3 == contador:
            alert(`Felicidades ganastee,el numero secreto era:${contador} y te costo:${intentos}`)
        break
        case valor3 > contador:
            console.log(`El numero es mayor al secreto`)
        break
        case valor3 < contador:
            console.log("El numero es inferior al secreto")
        break
    }
} while (valor3 !== contador){}

//Ejercicio 6
console.log("Ejercicio 6")
let division = null
const valor4 = Number(prompt("Ingrese un valor"))

for (let i = 1; i <= valor4; i++){
    if(valor4 % i === 0){
        division = valor4 / i
        console.log(`${valor4 / i}`)
    }
}

//Ejercicio 7
console.log("Ejercicio 7")

function sonarCampana(){
    console.log("Ding Dong")
    return `Ding Dong, `
}

let resultado = ""

for (let i = 0; i < 5; i++){
    resultado += sonarCampana();
}

console.log(resultado)



//Ejercicio 8
console.log("Ejercicio 8")
const fechaLimite = "1997-8-3"
const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-21-18", "2001-1-9"]

for (const fecha of fechas){
    if (fecha >= fechaLimite){
        console.log(fecha)
    }
}

//Ejercicio 9
console.log("Ejercicio 9")
const colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]

for (const color of colores){
    console.log(color)
}


//Ejercicio 10
console.log("Ejercicio 10")

const colorFunction = (colores) =>{
    for (const color of colores){
        console.log(color)
    }
}


colorFunction(colores)

/*
//Ejercicio 11
console.log("Ejercicio 11")

const numeros = [10, 12, 33, 45, 60]

for (const numero of numeros){
    console.log(`El numero es ${numero} y su doble es ${numero*2}`)
}

//Ejercicio 12
console.log("Ejercicio 12")

const familia = [{  nombre: "Juan",
                    apellido: "Perez",
                    edad: 25,
                    integrante: "Padre"},
                {   nombre: "Jose",
                    apellido: "Perez",
                    edad: 10,
                    integrante: "hijo"},
                {   nombre: "Vanesa",
                    apellido: "Rojo",
                    edad: 30,
                    integrante: "madre"},
                {   nombre: "Maria",
                    apellido: "Perez",
                    edad: 8,
                    integrante: "hija"}]

for (let i = 0; i < 4; i++){
    switch (true){
        case i == 0:
            console.log(`Hola soy ${familia[i].nombre} ${familia[i].apellido} (${familia[i].integrante}) y tengo ${familia[i].edad}`)
        break
        case i == 1:
            console.log(`Hola soy ${familia[i].nombre} ${familia[i].apellido} (${familia[i].integrante}) y tengo ${familia[i].edad}`)
        break
        case i == 2:
            console.log(`Hola soy ${familia[i].nombre} ${familia[i].apellido} (${familia[i].integrante}) y tengo ${familia[i].edad}`)
        break
        case i == 3:
            console.log(`Hola soy ${familia[i].nombre} ${familia[i].apellido} (${familia[i].integrante}) y tengo ${familia[i].edad}`)
        break
    }
}

//Ejercicio 13
console.log("Ejercicio 13")

const persona1 = {  nombre: "Juan",
                    apellido: "Pepe",
                    edad: 30,
                    nacionalidad: "Argentino",
                    tieneMascota: "si"
} 

for (propiedad in persona1 ){
    console.log(propiedad)
}

//Ejercicio 14
console.log("Ejercicio 14")

for (propiedad in persona1 ){
    console.log (persona1[propiedad])
}

//Ejercicio 15
console.log("Ejercicio 15")

let valorIngresado = null
let pares = 0
let impares = 0

do{
    alert("Recuerde que para finalizar el programa debe ingresar 0")
    valorIngresado = Number(prompt("Ingrese un numero"))
    switch (true){
        case valorIngresado % 2 == 0 && valorIngresado > 0:
            pares += valorIngresado
        break
        case valorIngresado % 2 !== 0:
            impares+= valorIngresado
        break
    }
} while (valorIngresado !== 0){
    console.log(`Pares: ${pares}`)
    console.log(`Impares: ${impares}`)
}
*/
//Ejercicio 16
console.log("Ejercicio 16")

let numeroArray = []
let ingresoArray = null

do{
    ingresoArray = Number(prompt("Ingrese un numero"))
    numeroArray.push(ingresoArray)
} while (numeroArray.length < 10){}

let mayorNumero = numeroArray[0]

for (let i = 0; i < numeroArray.length; i++){
    switch (true){
        case numeroArray[i] > mayorNumero:
            mayorNumero = numeroArray[i]
        break
    }
}

console.log (`El numero mas grande es: ${mayorNumero}`)

//Ejercicio 17
console.log("Ejercicio 17")
//Ejercicio 18
console.log("Ejercicio 18")
//Ejercicio 19
console.log("Ejercicio 19")

