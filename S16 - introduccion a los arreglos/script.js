//variables
const diasemana =  ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
const frutas = ["manzana","platano", "pera", "uva", "ciruela"]

//salida del documento

//funciones
document.getElementById(`mostrar`).addEventListener("click", function mostrar(){
    document.getElementById("arreglo1").innerHTML= diasemana;
document.getElementById("valor1").innerHTML = diasemana[6];

document.getElementById("frutas").innerHTML= frutas;
//longitud del arreglo frutas
document.getElementById("longitudfrutas").innerHTML= `hay ` + frutas.length+  ` frutas`

})

