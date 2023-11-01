
// Ejercicio 1
console.log("Ejercicio 1")
let num1 = 5
let num2 = 3

if (num1 > num2){
    console.log (num1)
} else{
    console.log (num2)
}

// Ejercicio 2
console.log("Ejercicio 2")
if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1){
    console.log(num2)
}else {
    console.log(`Los numeros son iguales`)
}

// Ejercicio 3
console.log("Ejercicio 3")
if (num1 == num2){
    console.log(`Los numeros son iguales`)
} else{
    console.log(`Los numeros son diferentes`)
}

// Ejercicio 4
console.log ("Ejercicio 4")

let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"

if (fecha2 > fecha1){
    console.log(`La fecha ${fecha2} es mayor que ${fecha1}`)
} else if (fecha1 == fecha2) {
    console.log(`Las fechas son iguales`)
} else{
    console.log `La fecha ${fecha1} es mayor que ${fecha2}`
}

// Ejercicio 5
console.log ("Ejercicio 5")

let fecha3 = "1987-5-7"
let fecha4 = "2025-9-2"

if (fecha3 > fecha4){
    console.log(`La fecha ${fecha3} es mayor que ${fecha4}`)
} else if (fecha3 == fecha4) {
    console.log(`Las fechas son iguales`)
} else{
    console.log (`La fecha ${fecha3} es menor que ${fecha4}`)
}

// Ejercicio 6
console.log ("Ejercicio 6")

let dato1 = 5
let dato2 = 7
let dato3 = 9

switch (true){
    case dato1 > dato2 && dato1 > dato3:
        console.log(`${dato1} es el mayor`)
    break
    case dato2 > dato1 && dato2 > dato3:
        console.log(`${dato2} es el mayor`)
    break
    case dato3 > dato2 && dato3 > dato1:
        console.log(`${dato3} es el mayor`)
    break
}

// Ejercicio 7
console.log ("Ejercicio 7")
let color = prompt("Elija un color entre estos 3: rojo, azul o verde")
switch (true){
    case color == "rojo":
        alert("El color de la pasión")
        console.log("El color de la pasión")
    break
    case color == "azul":
        alert("El color del mar")
        console.log("El color del mar")
    break
    case color == "verde":
        alert("El color de la naturaleza")
        console.log("El color de la naturaleza")
    break
}

// Ejercicio 8
console.log ("Ejercicio 8")

let valor1 = parseInt(prompt("Ingrese primer valor del 1 al 100"))
let valor2 = parseInt(prompt("Ingrese segundo valor del 1 al 100"))
let operacion = prompt("Elija una operacion: suma - resta - división - multiplicación - raíz")


switch (true){
    case operacion == "suma" ||"Suma" || "SUMA":
        let suma = valor1 + valor2
        alert(`El resultado de la suma ${valor1} + ${valor2} es ${suma}`)
        console.log(`El resultado de la suma ${valor1} + ${valor2} es ${suma}`)
    break
    case operacion == "resta" || "Resta" || "RESTA":
        let resta = valor1 - valor2
        alert(`Su resultado es ${resta}`)
        console.log(`Su resultado es ${resta}`)
    break
    case operacion == "division" || "Division" || "DIVISION" || "división" || "División" || "DIVISIÓN":
        let division = valor1 / valor2
        alert(`Su resultado es ${division}`)
        console.log(`Su resultado es ${division}`)
    break
    case operacion == "multiplicacion" || "Multiplicacion" || "MULTIPLICACION" || "multiplicación" || "Multiplicación" || "MULTIPLICACIÓN":
        let multiplicacion = valor1 * valor2
        alert(`Su resultado es ${multiplicacion}`)
        console.log(`Su resultado es ${multiplicacion}`)
    break
    case operacion == "raiz" || "Raiz" || "RAIZ" || "raíz" || "Raíz" || "RAÍZ":
        let raiz = valor1 * Math.sqrt(valor2)
        alert(`Su resultado es ${raiz}`)
        console.log(`Su resultado es ${raiz}`)
    break
}

// Ejercicio 9
console.log ("Ejercicio 9")

let persona1 ={
        nombre: "Pepe",
        edad: 26,
        altura: 1.29
}
    persona2 ={
        nombre: "Jose",
        edad: 35,
        altura: 1.80
}

if (persona1.altura > persona2.altura){
    console.log(`${persona1.nombre} es mas alto que ${persona2.nombre}`)
} else {
    console.log(`${persona2.nombre} es mas alto que ${persona1.nombre}`)
}
if (persona1.edad > persona2.edad){
    console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`)
} else{
    console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`)
}

// Ejercicio 10
console.log ("Ejercicio 10")

let nombre = prompt("Ingrese su nombre")
let edad = parseInt(prompt("Ingrese su edad"))
let altura = Number(prompt("Ingrese su altura en cm (ejemplo 1.20 = 120)"))
let vision = Number(prompt("Ingrese su vision (del 1 al 10)"))

if (edad >= 18 && altura >= 150 && vision >= 8 && vision <= 10){
    console.log(`${nombre}, estas capacitado para conducir`)
}  

// Ejercicio 11
console.log ("Ejercicio 11")

let miEdad = Number(prompt("Ingrese su edad"))

switch (true){
    case miEdad >= 0 && miEdad <= 12:
        alert(`Usted es un infante`)
    break
    case miEdad > 12 && miEdad <= 18:
        alert(`Usted es un adolescente`)
    break
    case miEdad > 18 && miEdad <= 45:
        alert(`Usted es un joven`)
    break
    case miEdad > 45 && miEdad <= 99:
        alert(`Usted es un anciano`)
    break
    case miEdad > 100:
        alert(`¿En realidad tiene esa edad?`)
    break
    case miEdad > 1000:
        alert(`No me mientas, no sos dracula.`)
    break
}

// Ejercicio 12
console.log ("Ejercicio 12")

let datoIngresado = Number(prompt("Ingrese un numero del 1 al 3"))

if (datoIngresado >3 || datoIngresado < 1){
        alert(`Valor no permitido`)
} else { 
    let datoRandom = Number(prompt("Ingrese un numero aleatorio"))
    switch (true){
        case datoIngresado == 1:
            alert(`El valor del dato ingresado es: ${datoIngresado * datoRandom}`)
        break
        case datoIngresado == 2:
            alert(`El valor del doble del  dato ingresado es: ${datoIngresado * datoRandom}`)
        break
        case datoIngresado == 3:
            alert(`El valor del triple del dato ingresado es: ${datoIngresado * datoRandom}`)
        break

    }
}

// Ejercicio 13
console.log ("Ejercicio 13")
let nombreCliente = prompt("Porfavor, ingrese su nombre")
let paseCliente = prompt("¿Tiene pase VIP o NORMAL?")
let entrada = prompt("¿Posee usted entrada? (si o no)")

switch (true){
    case nombreCliente == "Fede" || paseCliente == "VIP":
        alert("Bienvenido")
    break
    case entrada == "si":
        let compraEntrada = prompt("¿Desea utilizar su entrada?")
        if (compraEntrada == "no"){
            alert("Hasta luego, vuelva pronto")
        } else{
            alert("Bienvenido")
        }
    break
    default:
            let compraCliente = prompt("¿Desea usted comprar una entrada? (si o no)")
                if (compraCliente == "si"){
                    let valorCompra = Number(prompt("Ingrese cuanto dinero tiene disponible"))
                    if (valorCompra >= 1000){
                        alert(`Venta exitosa, bienvenido.`)
                    }else{
                        alert(`No se pudo completar el pago por falta de saldo, hasta luego.`)
                    }
                } else{
                    alert(`Hasta luego.`)
                }
    break
}


// Ejercicio 14
console.log ("Ejercicio 14")

const numeroIncognita = Math.floor(Math.random() * 10) + 1
let numeroIngresado = Number(prompt("Ingrese un numero del 1 al 10 (Quedan 2 intentos mas)"))

console.log(numeroIncognita)

switch (true){
    case numeroIngresado == numeroIncognita:
        alert("Felicidades! Ganaste!")
    break
    case numeroIngresado < numeroIncognita:
        alert(`El número ingresado es menor al número a adivinar, vuelva intentarlo(Queda 1 intento mas)`)
        let numeroIngresado2 = Number(prompt("Ingrese un nuevo numero del 1 al 10"))
        if (numeroIngresado2 > numeroIncognita) {
            alert(`El número ingresado es mayor al número a adivinar, vuelva intentarlo(Ultima oportunidad)`)
            let numeroIngresado3 = Number(prompt("Ingrese un nuevo numero del 1 al 10"))
            if (numeroIngresado3 == numeroIncognita) {
                alert(`Ganaste!, adivinaste el número`)
            } else{
                alert("Te quedaste sin intentos :'c")
                }
        }
    break
    case numeroIngresado > numeroIncognita:
        alert(`El número ingresado es mayor al número a adivinar, vuelva intentarlo(Queda 1 intento mas)`)
        let numeroIngresado4 = Number(prompt("Ingrese un nuevo numero del 1 al 10"))
        if (numeroIngresado4 < numeroIncognita){
            alert(`El número ingresado es menor al número a adivinar, vuelva intentarlo(Ultima oportunidad)`)
            let numeroIngresado5 = Number(prompt("Ingrese un nuevo numero del 1 al 10"))
            if (numeroIngresado5 == numeroIncognita) {
                alert(`Ganaste!, adivinaste el número`)
            } else{
                alert("Te quedaste sin intentos :'c")
                }
        }
    break
    case numeroIngresado > 10:
        alert("Numero incorrecto")
    break
}

// Ejercicio 15
console.log ("Ejercicio 15")

let player1 = prompt("Jugador 1, ingrese su nombre")
let player2 = prompt("Jugador 2, ingrese su nombre")

let ppt1 = prompt("Jugador 1, ingrese: ¿piedra, papel o tijera?")
let ppt2 = prompt("Jugador 2, ingrese: ¿piedra, papel o tijera?")

switch (true){
    case ppt1 == "piedra" && ppt2 == "tijera":
    case ppt1 == "papel" && ppt2 == "piedra":
    case ppt1 == "tijera" && ppt2 == "papel":
        alert(`${player1} es el ganador`)
    break
    case ppt2 == "piedra" && ppt1 == "tijera":
    case ppt2 == "papel" && ppt1 == "piedra":
    case ppt2 == "tijera" && ppt1 == "papel":
        alert(`${player2} es el ganador`)
    break
    case ppt2 == ppt1:
        alert(`${player1} y ${player2} empataron, vuelvan a intentarlo`)
        ppt1 = prompt("Jugador 1, ingrese: ¿piedra, papel o tijera?")
        ppt2 = prompt("Jugador 2, ingrese: ¿piedra, papel o tijera?")
        case ppt1 == "piedra" && ppt2 == "tijera":
        case ppt1 == "papel" && ppt2 == "piedra":
        case ppt1 == "tijera" && ppt2 == "papel":
        alert(`${player1} es el ganador`)
    break
        case ppt2 == "piedra" && ppt1 == "tijera":
        case ppt2 == "papel" && ppt1 == "piedra":
        case ppt2 == "tijera" && ppt1 == "papel":
        alert(`${player2} es el ganador`)
    break
    default:
        alert("Un jugador hizo trampa.")
    break
}

// Ejercicio 16
console.log ("Ejercicio 16")

let valor3 = parseInt(prompt("Ingrese primer valor del 1 al 100"))
let valor4 = parseInt(prompt("Ingrese segundo valor del 1 al 100"))
let operacion2 = prompt("Elija una operacion: suma - resta - división - multiplicación - raíz")


switch (true){
    case operacion2 == "suma" ||"Suma" || "SUMA":
        let suma2 = valor3 + valor4
        alert(`El resultado de la suma ${valor3} + ${valor4} es ${suma2}`)
        console.log(`El resultado de la suma ${valor3} + ${valor4} es ${suma2}`)
    break
    case operacion2 == "resta" || "Resta" || "RESTA":
        let resta2 = valor3 - valor4
        alert(`Su resultado es ${resta2}`)
        console.log(`Su resultado es ${resta2}`)
    break
    case operacion2 == "division" || "Division" || "DIVISION" || "división" || "División" || "DIVISIÓN":
    case valor4 == 0:
        alert("ERROR, vuelva a ingresar el divisor, no puede ser 0")
        valor4 = Number(prompt("Ingrese divisor del 1 al 100"))
        let division2 = valor3 / valor4
        alert(`Su resultado es ${division2}`)
        console.log(`Su resultado es ${division2}`)
    break
    case operacion2 == "multiplicacion" || "Multiplicacion" || "MULTIPLICACION" || "multiplicación" || "Multiplicación" || "MULTIPLICACIÓN":
        let multiplicacion2 = valor3 * valor4
        alert(`Su resultado es ${multiplicacion2}`)
        console.log(`Su resultado es ${multiplicacion2}`)
    break
    case operacion2 == "raiz" || "Raiz" || "RAIZ" || "raíz" || "Raíz" || "RAÍZ":
        let raiz2 = valor3 * Math.sqrt(valor4)
        alert(`Su resultado es ${raiz2}`)
        console.log(`Su resultado es ${raiz2}`)
    break
}

// Ejercicio 17
console.log ("Ejercicio 17")

let nombre17 = prompt("Ingrese su nombre")
let apellido17 = prompt("Ingrese su apellido")
let dni17 = Number(prompt("Ingrese su numero de DNI"))
let domicilio17 = prompt("Ingrese su domicilio")
let fechanacimiento17 = prompt("Ingrese su fecha de nacimiento")
let confimacion17 = prompt(`Los datos ingresados son:
Nombre: ${nombre17}
Apellido: ${apellido17}
DNI: ${dni17}
Domiclio: ${domicilio17}
Fecha de Nacimiento: ${fechanacimiento17}
¿Los datos son correctos?`)

switch (true){
    case confimacion17 == "si":
        let persona17 = {
            nombre: nombre17,
            apellido: apellido17,
            dni: dni17,
            domicilio: domicilio17,
            fecha_nacimiento: fechanacimiento17
        }
        alert("Registro exitoso")
        console.table(persona17)
    break
    case confimacion17 == "no":
        alert("Vuelva a intentarlo dentro de 1 mes")
    break
}