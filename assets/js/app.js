// API datos financieros
const boton = document.getElementById('boton')
const tarjeta = document.getElementById('tarjeta')
const seleccion = document.getElementById('seleccion')

boton.addEventListener('click', mostrar)

function mostrar(e) {
    e.preventDefault();
    const opcion = seleccion.value;
    const url = 'https://mindicador.cl/api/' + opcion

    tarjeta.innerHTML = `<h3>Origen de datos : ${url}</h3>`
}

boton.addEventListener('click', async (e) => {
    console.log("segunda funcion")
    const opcion = seleccion.value;
    const url = 'https://mindicador.cl/api/' + opcion
    console.log(opcion)
    e.preventDefault()

    const valoresUrl = await fetch(url)
    const valoresSeleccion = await valoresUrl.json()
    console.log(valoresSeleccion)
    console.log(valoresSeleccion.serie)


    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


})