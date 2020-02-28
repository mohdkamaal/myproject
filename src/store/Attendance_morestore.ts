import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    Attendmore: []
  },
  mutations: {
    SET_ATTENDMORE(state, Attendmore) {
      state.Attendmore = Attendmore;
    }
  },
  actions: {
    loadAttendmore({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/parent/1/profile")
        .then(data => {
          console.log(data.data);
          let Attendmore = data.data;
          commit("SET_ATTENDMORE", Attendmore);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {}
});
