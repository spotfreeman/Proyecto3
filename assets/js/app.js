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
    <p class="">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database-fill-down" viewBox="0 0 16 16">
  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z"/>
  <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z"/>
</svg>
Origen de datos : ${url}</p>
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