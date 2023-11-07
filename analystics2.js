import Chart from 'chart.js/auto';

let ctx = document.getElementById('chart3')


const labels = ['2','4','6','8','10', '12',]
const data = {
    labels: labels,
    datasets: [{
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





