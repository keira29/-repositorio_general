//variables
var clima = "nublado";
var fruta = "manzana"
var diassemana = `martes`;
//estructura switch case

switch (clima) {
    case `lluvioso`:
        console.log("recueda llevar un paraguas  ");
        break;
    case `soleado `:
        console.log("viste ligero  ");
        break;
    case `nublado`:
        console.log("sal a la calle ");
        break;
    default:
        console.log("clima desconocido");
        break;
}
//si la fruuta es manzana el precio es de S/5
//si la fruuta es platano el precio es de S/2
//si la fruuta es mango el precio es de S/4
//si es cualquiera otra fruta no se tiene esa fruta 

switch (fruta) {
    case `manzana`:
        console.log("precio es 5 soles")
        break;
    case `platano`:
        console.log("el precio es  2 soles ");
        break;
    case `mango`:
        console.log(" el precio es 4 soles ");
        break;
    default:
        console.log(" no hay esa fruta");
        break;
}

switch(diassemana){
    case `lunes`:
        console.log("hoy es lunes " );
        break;
    case `martes`:
        console.log( "hoy es martes ");
        break;
    case `miercoles`:
        console.log( "hoy es miercoles ");
        break;
    case `jueves`:
        console.log( "hoy es jueves ");
        break;
    case `viernes`:
        console.log( " hoy es viernes ");
        break;
    default:
            console.log ("nohay dia");
        break;
}


