import { createChart } from "./chart.js";

// API datos financieros
const boton = document.getElementById('boton')
const tarjeta = document.getElementById('tarjeta')
const seleccion = document.getElementById('seleccion')

// Esperando evento del BOTON el cual llamara la funcion MOSTRAR
boton.addEventListener('click', mostrar)

// Funcion que tiene por objetivo mostrar de donde provienen los datos
function mostrar(e) {
    e.preventDefault();
    // en la constante OPCION se guarda el valor seleccionado por el usuario
    const opcion = seleccion.value;
    // en la constante URL se guarda la direccion de la API + OPCION del usuario
    const url = 'https://mindicador.cl/api/' + opcion

    // Mostramos en la pagina principal la URL para verificar si el STRING del URL correcto.
    tarjeta.innerHTML = `
    <p class="">Origen de datos : ${url}</p>
    `
}

let valoresApi = []
// Esperando evento del BOTON para ejecutar un ASYNC
boton.addEventListener('click', async (e) => {
    e.preventDefault()
    // en la constante OPCION se guarda el valor seleccionado por el usuario
    const opcion = seleccion.value;

    // en la constante URL se guarda la direccion de la API + OPCION del usuario
    // lo hice asi para que sea lo mas secuencial e ilustrativo
    const url = 'https://mindicador.cl/api/' + opcion

    // Array que guardara los datos en LET para que sea usable de distintas funciones
    let valoresApi = []

    // Obtenemos y guardamos los datos JSON   
    const getData = async () => {
        const opcion = seleccion.value;
        const valorUrl = 'https://mindicador.cl/api/' + opcion
        const url = await fetch(valorUrl);
        const data = await url.json();
        console.log(data)
        valoresApi = data.serie;
    };

    // Enviamos la informacion guardada en el Arregle "valoresApi" a Chart.js
    getData()
        // Si la informacion es correcta
        .then(() => { createChart(valoresApi) })
        // Si la informacion es incorrecta o algo salio mal
        .catch(error => console.log("Algo salio mal"))
        .finally(end => console.log("Fin de la ejecucion de getData"))

})

// Existen dos boton.addEventListener por que queria ver como funcionaban en 
// paralelo no es un error de duplicado