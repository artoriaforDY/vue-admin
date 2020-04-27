import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse:false
  },
  mutations: {
    toggleCollapse(state,value){
      state.collapse = value
    }
  },
  actions: {
  },
  modules: {
  }
})
