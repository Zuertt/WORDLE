let intentos = 6;
let diccionario = ["ALADO", "ALBAS", "ALTAR", "ANTON", "ATIZO", "AVALA", "AVION", "AZUL"];


let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const button = document.getElementById("guess-button");



button.addEventListener("click", intentar);

function intentar(){
	const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    const INTENTO = leerIntento();
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#1abc9c';
            
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f1c40f';
        } else {     
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#34495e';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW);
    if (INTENTO === palabra ) {
        terminar("<h1 style='color: GREEN '>FELICIDADES, HAS GANADO</h1>");
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
    intentos--
    if (intentos==0){
        terminar("<h1 style='color: RED'>LO SIENTO, HAS PERDIDO</h1>");
    }


}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){

    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}




window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}