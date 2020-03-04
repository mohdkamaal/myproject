/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default {
  state: {
    //data
    feemodule: []
  },
  getters: {
    fee: state => state.feemodule
  },
  actions: {
    // method
    // get request..
    async feemodule({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/student/1/fee"
        );
        console.log(response.data);
        const data = response.data;
        commit("set_feemodule", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    set_feemodule: (state, feemodule) => (state.feemodule = feemodule)
  },
  modules: {}
};
