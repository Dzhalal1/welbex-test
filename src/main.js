import Vue from 'vue'
import App from './App.vue'
import store from './store'
import tailwindCss from './assets/main.css'

Vue.config.productionTip = false

new Vue({
    store,
    tailwindCss,
    render: h => h(App)
}).$mount('#app')
