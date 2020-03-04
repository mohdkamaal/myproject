/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default {
  state: {
    //data
    vatsw: []
  },
  getters: {
    wise: state => state.vatsw
  },
  actions: {
    // method
    // get request..
    async vatsw({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/all/subject/teacher"
        );
        console.log(response.data);
        const data = response.data;
        commit("set_vatsw", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    set_vatsw: (state, vatsw) => (state.vatsw = vatsw)
  },
  modules: {}
};
