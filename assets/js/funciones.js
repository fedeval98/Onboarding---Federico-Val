// Ejercicio 1
console.log("Ejercicio 1")

function sumar(){
    console.log (100*20)
}

// Ejercicio 2
console.log("Ejercicio 2")

sumar()

// Ejercicio 3
console.log("Ejercicio 3")

function sumarParametros(x, y){
    console.log(x * y)
}

// Ejercicio 4
console.log("Ejercicio 4")

let numeroA = 100
let numeroB = 20

sumarParametros(numeroA, numeroB)

// Ejercicio 5
console.log("Ejercicio 5")

function sumarReturn (x, y){
    let multi = x *  y
    return multi
}

const resultado = sumarReturn(numeroA, numeroB)
console.log(resultado)

// Ejercicio 6
console.log("Ejercicio 6")

const sumas = function (x, y){
    let multi2 = x * y
    return multi2
}
const resultado2 = sumas(numeroA, numeroB)

console.log(resultado2)
// Ejercicio 7
console.log("Ejercicio 7")

const suma2 = (x, y) => (x*y) 

const resultado3 = suma2(numeroA, numeroB)

console.log (resultado3)

// Ejercicio 8
console.log("Ejercicio 8")
let nombre = "Mariano"

function saludar (nombre){
    console.log(`Hola ${nombre}, bienvenido`)
}
saludar(nombre)

// Ejercicio 9
console.log("Ejercicio 9")

const numero1 = 10
const numero2 = 5

const multiplicacion = function (x, y) {
    let resultadomultiplicacion = x * y
    return resultadomultiplicacion
}
const rMultiplicacion = multiplicacion(numero1, numero2)

console.log (rMultiplicacion)

// Ejercicio 10
console.log("Ejercicio 10")

let base = 3
let altura = 5

function area (x, y){
    return (x * y)/2}
const calcarea = area(base, altura)

console.log (calcarea)

let lado1 = 10
    lado2 = 5
    lado3 = 5

function perimetro (x, y, z){
    return (x + y + z)
}

const perimetroTriangulo = perimetro(lado1, lado2, lado3)

console.log (perimetroTriangulo)

// Ejercicio 11
console.log("Ejercicio 11")

let precio = Number(prompt("Ingrese precio"))
    cantidad = Number(prompt("Ingrese cantidad"))

const totalCompra = (x, y) => (x * y)

const compraTotal = totalCompra(precio, cantidad)

console.log (compraTotal)

switch(true){
    case cantidad >= 10 && cantidad < 20:
        const conDescuento10 = (compraTotal - (compraTotal * 0.10))
        console.log(`Su total a pagar es de ${conDescuento10}, ya recibio un descuento del 10% ($${compraTotal * 0.10})`)
    break
    case cantidad >=20:
        const conDescuento20 = (compraTotal - (compraTotal * 0.20))
        console.log(`Su total a pagar es de ${conDescuento20}, ya recibio un descuento del 20% ($${ compraTotal * 0.20})`)
    break
}

// Ejercicio 12
console.log("Ejercicio 12")

let personaEdad = Number(prompt("Ingrese su edad"))

function esMayorDeEdad (edad){
    if (personaEdad >= 18){
        return console.log ("Es mayor de edad")
    } else{
        return console.log ("Es menor de edad")
    }
}

esMayorDeEdad(personaEdad)

// Ejercicio 13
console.log("Ejercicio 13")

let ingresos = Number(prompt("Ingrese el monto de sus ingresos"))

function impuestos (apagar){
    switch (true){
        case ingresos <= 10000:
            return console.log (`Usted debe pagar un impuesto del 10% de su ingreso, el cual es: ${ingresos * 0.10}`)
        break
        case ingresos >= 10000 && ingresos <= 20000:
            return console.log (`Usted debe pagar un impuesto del 15% de su ingreso, el cual es: ${ingresos * 0.15}`)
        break
        case ingresos > 20000:
            return console.log (`Usted debe pagar un impuesto del 20% de su ingreso, el cual es: ${ingresos * 0.20}`)
        break
    }
}

impuestos(ingresos)

// Ejercicio 14
console.log("Ejercicio 14")

let diaIngresado = Number(prompt("Ingrese un dia"))

function verificarDia (dia){
    switch (true){
        case diaIngresado >= 1 && diaIngresado <= 5:
            return console.log ("Es un dia laboral")
        break
        case diaIngresado == 6 || diaIngresado == 7:
            return console.log ("Es fin de semana")
        break
        default:
            return console.log ("Dato incorrecto")
    }
}

verificarDia(diaIngresado)

// Ejercicio 15
console.log("Ejercicio 15")
// Ejercicio 16
console.log("Ejercicio 16")
// Ejercicio 17
console.log("Ejercicio 17")
// Ejercicio 18
console.log("Ejercicio 18")
// Ejercicio 19
console.log("Ejercicio 19")
// Ejercicio 20
console.log("Ejercicio 20")
// Ejercicio 21
console.log("Ejercicio 21")
// Ejercicio 22
console.log("Ejercicio 22")
// Ejercicio 23
console.log("Ejercicio 23")