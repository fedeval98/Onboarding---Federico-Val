// Ejercicio 1 
let miNombre = "Federico"

// Ejercicio 2 
let miApellido = "val"

// Ejercicio 3 
let miEdad = 25

// Ejercicio 4
let miMascota = "Ceferino"

// Ejercicio 5 
let edadMascota = 2

// Ejercicio 6 
console.log (miNombre)
console.log (miApellido)
console.log (miEdad)
console.log (miMascota)
console.log (edadMascota)

// Ejercicio 7 
let nombreCompleto = miNombre + " " + miApellido

// Ejercicio 8 
let textoPresentacion = `Hola soy ${miNombre} ${miApellido} tengo ${miEdad} años y tengo un perro, de raza Weymaraner, llamado ${miMascota} de ${edadMascota} años que es terrible, se la pasa haciendo lio.`

console.log (nombreCompleto)
console.log (textoPresentacion)

// Ejercicio 9 
const sumaEdades = (miEdad + edadMascota)
const restaEdades = (miEdad - edadMascota)
const productoEdades = (miEdad * edadMascota)
const divisionEdades = (miEdad / edadMascota)
const raizEdades = (edadMascota * Math.sqrt(miEdad))

console.log (sumaEdades)
console.log (restaEdades)
console.log (productoEdades)
console.log (divisionEdades)
console.log (raizEdades)

// Ejercicio 10 
let alumno = {
    nombre: "Federico",
    apellido: "Val",
    edad: 25,
    altura: 1.76,
    nacionalidad: "Argentina"
}
console.table (alumno)

// Ejercicio 11
let mascota = {
    nombre: "Ceferino",
    raza: "Weymaraner",
    edad: 2,
    color_de_ojos: "Amarillo",
    hiperactivo: true
}
console.table (mascota)

// Ejercicio 12
const frutas = ["manzana","banana","mandarina","uvas","pera"]

console.log (frutas)
console.log (frutas[0])
console.log (frutas[1])
console.log (frutas[2])
console.log (frutas[3])
console.log (frutas[4])

// Ejercicio 13
let soyMayorDeEdad = Number(prompt("ingrese una edad")) >= 18

console.log (`Soy mayor de edad ${soyMayorDeEdad}`)

// Ejercicio 14
const numeros = [1, 2, 3, 4, 5]
console.log (numeros)
console.log (numeros[0])
console.log (numeros[1])
console.log (numeros[2])
console.log (numeros[3])
console.log (numeros[4])

// Ejercicio 15
const familia = [
    madre = {
        nombre: "Lorena",
        apellido: "Perez de barradas",
        edad: 45
    },
    padre = {
        nombre: "Gabriel",
        apellido: "Val",
        edad: 53
    },
    hermano = {
        nombre: "Gabriel",
        apellido: "Val",
        edad: 27
    },
    hermana = {
        nombre: "Julieta",
        apellido: "Val",
        edad: 23
    },
    abuela = {
        nombre: "Cristina",
        apellido: "Nuñez",
        edad: 92
    }
]
console.log (familia)
console.log (familia[0])
console.log (familia[1])
console.log (familia[2])
console.log (familia[3])
console.log (familia[4])

// Ejercicio 16
const textoAleatorio = `Las ${numeros[3]} ${frutas[1]} que estaban en la mesa se las comio mi ${familia[4].nombre}`
console.log (textoAleatorio)

// Ejercicio 17
let edad1 = parseInt(prompt("Ingrese la primer edad a comparar"))
let edad2 = parseInt(prompt("Ingrese la segunda edad a comparar"))

let edadesIguales = `Mi edad es igual a la de mi compañero ${edad1 === edad2}`
let soyMayor = `Mi edad es mayor a la de mi compañero ${edad1 > edad2}`
let soyMenor = `Mi edad es menor a la de mi compañero ${edad1 < edad2}`

console.log (edadesIguales)
console.log (soyMayor)
console.log (soyMenor)

// Ejercicio 18
let edadPersona = parseInt(prompt("Ingrese la edad de la persona"))
let alturaPersona = parseInt(prompt("Ingrese la altura de la persona"))

const calculo = edadPersona >= 6 && alturaPersona >= 120

const puedeSubir = `Puede subir a la atraccion, ${calculo}`

console.log(puedeSubir)

// Ejercicio 19
let pase = prompt("Ingrese su pase: VIP, Normal o Limitado")
let saldo = parseInt(prompt("Ingrese su saldo, entre 0 y 5000"))

const pase_saldo = (pase == "VIP" || pase == "vip") || saldo >= 1000 

const puedePasar = `La persona puede pasar, ${pase_saldo}`

console.log(puedePasar)