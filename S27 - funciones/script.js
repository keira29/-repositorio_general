//multilicar
function multiplicar(a, b){
    resultado = a*b
    return resultado;
}
var resultado = multiplicar( 3, 5);
console.log(resultado)


//suma
function suma (a,b){
    resultado = a+b
    return resultado;
}
var resultado = suma( 4, 4);
console.log(resultado)

//resta
function resta (a,b){
    resultado = a - b
    return resultado;
}
var resultado = resta(10, 5)
console.log(resultado)

//el cuadrado

function  cuadrado (b){
    resultado = b**2
    return resultado;
}
var resultado = cuadrado(4);
console.log(resultado)


// descuentos
//ejemplo1
function  descontar (precio,descuento ){
    hallo = (precio*descuento)/100
    resultado = precio - hallo
    return resultado;
}
var resultado =  descontar (110, 20)
console.log(resultado)

//ejercicio|1 
function  comprar ( zapato,descuento){
    primero = (zapato * descuento)/100
    resultado = zapato -primero
    return resultado;
}
var resultado = comprar (300, 40)
console.log (resultado)
document.getElementById("de").innerHTML  = resultado
