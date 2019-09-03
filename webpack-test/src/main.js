import './css/style.css'

import Vue from 'vue'

import VueBus from './js/vue-bus.js'
import router from './js/router.js'
import store from './js/vuex.js'
Vue.use(VueBus)

import App from './template/app.vue'

new Vue({
    el: '#app',
    router,
    store,
    render: h=> {
        return h(App)
    }
})
