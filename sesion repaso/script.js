//variable
var num1 = 4;
var num2 = 2;
var num3 = 8;
var texto1 =`4`;
var nombre= "ana"
//salidas 
console.log(num1>num2);
console.log(num1==texto1);
console.log(num1===texto1);

//operadores logicos 
//el num1 es mayor al num2 o num3 es menor a nm1.
console.log(num1>num2|| num3<num1);

//el num1 es mayor a num2 y num2 es mayor a num3
console.log(num1>num2 && num2>num3);

//condicional 
//si num1 es mayor a num2 "maria gana el juego"
//si num3 es mayor a num2 "mario gaana el juego"
//canso concontrario "juan gana e juego "

if(num2>num3){
    console.log("Maria gana el juego");
}else if(num3>num2){
    console.log("mario gana el juego")
}else{
    console.log("juan gana el juego ")
}

//si desayune y me bañe puedo salir hacia el cepro , si no me quedo en mi casa
var desayune = false
var bañe = true


if(desayune && bañe){
    console.log( "puedo ir al cepro" );
}else {
    console.log( "me quedo en mi casa ");
}
//si la primera letra del nombre es "A"estonves colocar "tu nombre inicia"
//si la primera letra del nombre es "B" enonces colocar "tu nombre inicial"
//caso contrario colocar "no se como inicia tu nombre"
if (nombre[0]=="A"){
    console.log ("tu nombre inicia con A")  
}else if (nombre[0]=="B"){
    console.log("tu nombre inicia con B")
}else{
    console.log("nose como inicia tu nombre ")
}

