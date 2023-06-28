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

// Esperando evento del BOTON para ejecutar un ASYNC
boton.addEventListener('click', async (e) => {

    // en la constante OPCION se guarda el valor seleccionado por el usuario
    const opcion = seleccion.value;
    // en la constante URL se guarda la direccion de la API + OPCION del usuario
    const url = 'https://mindicador.cl/api/' + opcion
    e.preventDefault()

    // Obtenemos y cuardamos los datos JSON
    const valoresUrl = await fetch(url)
    const valoresSeleccion = await valoresUrl.json()

    // Preparo la informacion a mostrar posteriormente
    const fechas = valoresSeleccion.serie.map((entry) => entry.fecha)
    const valor = valoresSeleccion.serie.map((entry) => entry.valor)
    console.log(fechas)
    console.log(valor)
    // El elemento myChart y se inserta el grafico.
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            // Aqui se inserta la CONST "fechas"
            labels: fechas,
            datasets: [{
                label: 'Valor',
                // Aqui se inserta la CONST "valor"
                data: valor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
})

const reload = document.getElementById('reload')
reload.addEventListener("click", reloading)
function reloading() {
    location.reload()
}