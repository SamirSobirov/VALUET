import Chart from 'chart.js/auto';

let ctx = document.getElementById('chart2')

const data = {
    
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'blue',
        'white',
        'yellow'
      ],
      hoverOffset: 4
    }]
  };


new Chart(ctx, {
    type: 'doughnut',
    data: data,
})


