import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  input1: '',
  input2: '',
  value: ''
}
const mutations = {
  updateValue (state, value) {
    state.input1 = value.input1
    state.input2 = value.input2
    state.value = value.value
  }
}
export default new Vuex.Store({
  strict: true,
  state,
  mutations
})
