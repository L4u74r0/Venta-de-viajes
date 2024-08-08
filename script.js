import { barcelona, roma, parís, londres } from './ciudades.js';

//Obtener elementos del DOM

/* DOM (Document Objet Model):  Representacion estucturada de un 
documento HTML */

//Seleccionamos los elementos del DOM
let enlaces = document.querySelectorAll('a'); //Todos los elementos a que no contienen un "id"

let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")
let precioElemento = document.getElementById("precio")

//Agregamos un evento click a cada enlace
enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(){
            //REMOVER ACTIVO
            enlaces.forEach(function(enlace){
                enlace.classList.remove('active')
            });

            //Agragar  la clase 'active' al enlace actual
            this.classList.add('active');

            //obtener el contenido correspondiente segun el enlace 
            let contenido = obtenerContenido(this.textContent);

            //MOSTRAR EL CONTENIDO EN EL DOM
            tituloElemento.innerHTML = contenido.titulo;
            subTituloElemento.innerHTML = contenido.subtitulo;
            parrafoElemento.innerHTML = contenido.parrafo;
            precioElemento.innerHTML = contenido.precio;
        })
    })

//Funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : parís,
        'Londres' : londres,
    };
    return contenido[enlace];
}