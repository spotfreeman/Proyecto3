const myChart = document.getElementById('myChart')
const valorDiaHtml = document.getElementById('valorDia')
let myChartFin

export const createChart = (valoresApi) => {
    if (myChartFin) {
        myChartFin.destroy()
    }
    const valorFecha = valoresApi.map((item) => item.fecha)
    const valorFechaInvertida = valorFecha.slice().reverse()

    const valorValor = valoresApi.map((item) => item.valor)
    const valorValorInvertida = valorValor.slice().reverse()

    // Nueva funcionalidad indicador del dia
    const ultimoValor = parseInt(valorValor[0])
    const penultimoValor = parseInt(valorValor[1])


    console.log(ultimoValor)
    console.log(penultimoValor)
    if (ultimoValor < penultimoValor) {
        valorDiaHtml.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
        </svg>
        <h3>Valor de Hoy $ ${ultimoValor}</h3>
        `
    } else if (ultimoValor > penultimoValor) {
        valorDiaHtml.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
        </svg>
        <h3>Valor de Hoy $ ${ultimoValor}</h3>
        `
    } else {
        valorDiaHtml.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        <h3>Valor de Hoy $ ${ultimoValor}</h3>
        `
    }

    myChartFin = new Chart(myChart, {
        type: 'line',
        data: {
            // Aqui se inserta la CONST "fechas"
            labels: valorFechaInvertida,
            datasets: [{
                label: "Valor",
                // Aqui se inserta la CONST "valor"
                data: valorValorInvertida,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    // BeginAtZero en falso para que el grafico no inicie de valor = 0
                    beginAtZero: false
                }
            }
        }
    });
}





