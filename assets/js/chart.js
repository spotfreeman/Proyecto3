const myChart = document.getElementById('myChart')
let myChartFin

export const createChart = (valoresApi) => {
    if (myChartFin) {
        myChartFin.destroy()
    }
    const valorFecha = valoresApi.map((item) => item.fecha)
    const valorFechaInvertida = valorFecha.slice().reverse()

    const valorValor = valoresApi.map((item) => item.valor)
    const valorValorInvertida = valorValor.slice().reverse()

    const ultimaFecha = valorFecha[0]
    console.log(ultimaFecha)
    const ultimoValor = valorValor[0]
    console.log(ultimoValor)

    myChartFin = new Chart(myChart, {
        type: 'line',
        data: {
            // Aqui se inserta la CONST "fechas"
            labels: valorFechaInvertida,
            datasets: [{


                label: 'Valor',
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





