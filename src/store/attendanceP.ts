/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default {
  state: {
    //data
    attendance: []
  },
  getters: {
    detail: state => state.attendance
  },
  actions: {
    // method
    // get request..
    async attendance({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/student/1/attandance"
        );
        console.log(response.data);
        const data = response.data;
        commit("set_attendance", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    set_attendance: (state, attendance) => (state.attendance = attendance)
  },
  modules: {}
};
