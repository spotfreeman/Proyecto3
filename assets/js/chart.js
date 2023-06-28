const myChart = document.getElementById('myChart')
let myChartFin

export const createChart = (valoresApi) => {
    if (myChartFin) {
        myChartFin.destroy()
    }
    myChartFin = new Chart(myChart, {
        type: 'line',
        data: {
            // Aqui se inserta la CONST "fechas"
            labels: valoresApi.map((item) => item.fecha),
            datasets: [{
                label: 'Valor',
                // Aqui se inserta la CONST "valor"
                data: valoresApi.map((item) => item.valor),
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


