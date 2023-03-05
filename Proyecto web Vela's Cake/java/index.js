/** Maneú lista */
jQuery('document').ready(function($){

    let menubtn = $('.menu-icon'), menu = $('.seleccion ul');

    menubtn.click(function(){

    if(menu.hasClass('show')){
        menu.removeClass('show')
    } else{
        menu.addClass('show')
    }
    })
    
    
})

/** Change languaje */
let lenguajeactual = 'es';

function cambioidioma(newLanguaje) {
    
    const oldLanguajeElements = document.getElementsByClassName(lenguajeactual);
    
    for (element of oldLanguajeElements) {   
        element.style.display = 'none';        
    }

    lenguajeactual = newLanguaje;

    const newLanguajeElements = document.getElementsByClassName(lenguajeactual);
    for (element of newLanguajeElements) {
        element.style.display = 'block';
    }
}

/** Formulario correcto y error */
const formulario = document.getElementById('formulario');
const terminos = document.getElementById('terminos');
formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    if(terminos.checked){
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }    

});


