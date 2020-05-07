import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      character: Array,
      eqpt: Array,
      skill: Array,
      attr: Array,

      cwidth: 0,
      cheight: 0
  },
  mutations: {
    characterGet(state, data) {
      state.character = [...data]
    },
    eqptGet(state, data) {
      state.eqpt = [...data]
    },
    skillGet(state, data) {
      state.skill = [...data]
    },
    attrGet(state, data) {
      state.attr = [...data]
    }
  },
  actions: {
    dataInit({ commit }) {
      axios.get('./Data/character.json')
      .then((response) => {
        commit('characterGet', response.data)
        axios.get('./Data/skill.json')
        .then((response) => {
          commit('skillGet', response.data)
          axios.get('./Data/eqpt.json')
          .then((response) => {
            commit('eqptGet', response.data)
            axios.get('./Data/attr.json')
            .then((response) => {
              commit('attrGet', response.data)
            })
        })
        })
      }) 
    }
  }
})
