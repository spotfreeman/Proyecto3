// API datos financieros
const boton = document.getElementById('boton')
const tarjeta = document.getElementById('tarjeta')

const seleccion = document.getElementById('seleccion')

boton.addEventListener('click', mostrar)

function mostrar(e) {
    e.preventDefault();
    const opcion = seleccion.value;
    const url = 'https://mindicador.cl/api/' + opcion
    console.log("Funciona el Boton");
    console.log(opcion);

    tarjeta.innerHTML = `<h3>Origen de datos : ${url}</h3>`
}

boton.addEventListener('click', async (e) => {
    console.log("segunda funcion")
    e.preventDefault()

    const valoresUrl = await fetch(url)
    const valoresSeleccion = await valoresUrl.json()


})