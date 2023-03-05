/*
PONER AQUI VUESTROS JAVASCRIPTS
*/

/* Change languaje */
let actualLanguaje = 'es';

function setLanguaje(newLanguaje) {
    const oldLanguajeElements = document.getElementsByClassName(actualLanguaje);
    
    for (element of oldLanguajeElements) {   
        element.style.display = 'none';
    }
	
    actualLanguaje = newLanguaje;

    const newLanguajeElements = document.getElementsByClassName(actualLanguaje);
    for (element of newLanguajeElements) {
        element.style.display = 'block';
    }
}