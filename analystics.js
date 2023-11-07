import Chart from 'chart.js/auto';

let ctx = document.getElementById('chart')


const labels = ['NOV 15', 'NOV 16', 'NOV 17', 'NOV 18', 'NOV 19', 'NOV 20', 'NOV 21', 'NOV 22',]
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5
    }]
};

new Chart(ctx, {
    type: 'line',
    data: data,
})





