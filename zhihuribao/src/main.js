import './css/style.css'

import Vue from 'vue'

import VueBus from './js/common/vue-bus.js'
import router from './js/common/router.js'
import store from './js/common/vuex.js'
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
