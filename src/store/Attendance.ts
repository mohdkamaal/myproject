import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    Attandance: []
  },
  mutations: {
    SET_ATTANDANCE(state, Attandance) {
      state.Attandance = Attandance;
    }
  },
  actions: {
    loadAttandance({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/parent/2/student/attandance")
        .then(data => {
          console.log(data.data);
          let Attandance = data.data;
          commit("SET_ATTANDANCE", Attandance);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
