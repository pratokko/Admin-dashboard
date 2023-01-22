<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import Vue from 'vue'
  import { Line } from 'vue-chartjs'
  import Chart from 'chart.js'
  
  export default {
    extends: Line,
    data: () => ({
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }),
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
  </script>