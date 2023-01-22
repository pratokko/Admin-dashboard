
import { createApp } from 'vue'
// import Chart from 'chart.js'
// import VueChartjs from 'vue-chartjs'

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)
// Vue.use(VueChartjs, { Chart })

app.mount('#app')