//variables
const preguntas = ["¿conque frecuencias realizas deporte? <br> considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rapido , anadar en bicicleta , bailar o , por supuesto, practicar un deporte ",
    " ¿cuantos vasos de agua (200ml) bebes al dia ? <br> no consideres la ingesta de otros liquidos , como gaseosa , jugos azucarados o alcohol",
    "cuantas porciones de frutas y verduras consumes diariamente",]
const opciones = [
    ["3 o mas veces por semana",
        "entre 1 a 2 veces por semana ",
        "al menos 4 veces al mes ",],
    ["al menos 8 vasos al dia",
        "entre 5 y 8 , depende del dia",
        "cuando me acuerdo"],
    ["5 o mas",
        "2 a 4",
        "al menos 1 vex al dia"]
]
const clave = [
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3]
]
var i= 0;//indice de pregunta
var puntaje =0;


//funciones

function mostrarpreguntas() {
    document.getElementById(`pregunta`).innerHTML = preguntas[i];
    document.getElementById(`op1`).innerHTML = opciones[i][0];
    document.getElementById(`op2`).innerHTML = opciones[i][1];
    document.getElementById(`op3`).innerHTML = opciones[i][2];

}

function actualizarpuntaje(valor){
    puntaje =clave[i][valor]+puntaje;

    i=i+1;

    if(preguntas.length>i){
        mostrarpreguntas();
    }else{
        mostrarresultado();
    }
}

function mostrarresultado(){
    document.getElementById(`titulo`).innerHTML="respuestas";
    document.getElementById(`contenido`).innerHTML=`
    <p class= "resultado"> tu puntaje es de ${puntaje}</p>
     `;
}





//eventos
document.getElementById(`op1`).addEventListener("click", function () {
    actualizarpuntaje(0);
})
document.getElementById(`op2`).addEventListener("click", function () {
    actualizarpuntaje(1);
})
document.getElementById(`op3`).addEventListener("click", function () {
    actualizarpuntaje(2);
})



mostrarpreguntas();