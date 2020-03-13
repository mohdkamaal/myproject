/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default {
  state: {
    //data
    homework: []
    //   section: [],
    //   subjects: []
  },
  getters: {
    work: state => state.homework
  },
  actions: {
    // method
    // get request..
    async homework({ commit }) {
      try {
        const response = await axios.get(
          "http://sms-pta.herokuapp.com/api/class/homework"
        );
        console.log(response.data);
        const data = response.data;
        commit("set_homework", data);
      } catch (error) {
        alert(error);
      }
    }
  },

  // post request..

  mutations: {
    //used for changing the state
    set_homework: (state, homework) => (state.homework = homework)
    // used for changing the state
    // set_section: (state, section) => (state.section = section),
    //used for changing the state
    // set_subjects: (state, subjects) => (state.subjects = subjects)
  },
  modules: {}
};
