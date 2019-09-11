import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        list : [1, 3, 4,7,8,10, 12]
    },
    mutations: {
        increasement(state){
            state.count ++
        },
        decreasement(state, n = 2){
            state.count -= n
        }
    },
    getters: {
        filteredList: state => {
            return state.list.filter( item => item > 10)
        }
    },
    actions: {

    }
})
export default store