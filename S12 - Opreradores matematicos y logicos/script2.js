//Variables
var edad_juan = 18;
var ingresos_juan = 4000
var edad_maria = 20;
var ingresos_maria = 5000;

//salida por  pantalla
console.log("La edad de Juan es:" + edad_juan);
console.log("Los ingresos de juan son :" + ingresos_juan );
console.log("La edad de maria es:" + edad_maria);
console.log("Los ingresos de maria son :" + ingresos_maria );

//condicion

console.log("juan es mayor que maria y gana mas :" + (edad_juan > edad_maria && ingresos_juan > ingresos_maria));
console.log("maria es mayor que juan y gana menos:" + (edad_maria > edad_juan || ingresos_maria < ingresos_juan));
console.log("no es verdad que maaria gane menos que juan:" + (!ingresos_maria < ingresos_juan));
