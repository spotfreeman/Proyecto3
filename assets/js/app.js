// API datos financieros
const boton = document.getElementById('boton')
const tarjeta = document.getElementById('tarjeta')

boton.addEventListener('click', mostrar)

function mostrar(e) {
    e.preventDefault();
    console.log("Funciona el Boton")

    tarjeta.innerHTML = `<h3>Funciono el Boton</h3>`

}

