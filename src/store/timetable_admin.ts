/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default {
  state: {
    //data
    timetable: []
  },
  getters: {
    tt: state => state.timetable
  },
  actions: {
    // method
    // get request..
    async timetable({ commit }) {
      try {
        const response = await axios.get("http://192.168.1.136:8000/api/class");
        console.log(response.data);
        const data = response.data;
        commit("set_timetable", data);
      } catch (error) {
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    set_timetable: (state, timetable) => (state.timetable = timetable)
  },
  modules: {}
};
