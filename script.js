//
// Práctica 10 - Cronómetro
//

function start (){
    
    timeChronometer = window.setInterval (chronometer, 1000);

}

function chronometer (){

    const chron = document.getElementById ('cronometro');
    chron.innerHTML = counter++;

}

function stop  (){
    
    window.clearInterval (timeChronometer );

}

function clear (){

    const clear_chron = document.getElementById ('cronometro');
    counter = 0;
    clear_chron.innerHTML = counter; 

}

let timeChronometer ;

let counter = 0 ;

const buttonStart = document.getElementById ('iniciar');
buttonStart.addEventListener('click', start);

const buttonStop = document.getElementById ('detener');
buttonStop.addEventListener('click', stop);

const buttonClear = document.getElementById ('limpiar');
buttonClear.addEventListener('click', clear);



console.log('Esto es un cronómetro!');