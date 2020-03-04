import axios from "axios";

export default {
  state: {
    //data
    attendancemore: []
  },
  getters: {
    detailmore: state => state.attendancemore
  },
  actions: {
    // method
    // get request..
    async attendancemore({ commit }) {
      try {
        const response = await axios.get(
          "http://192.168.1.136:8000/api/student/1/attandance/2020-01-01/2020-03-30"
        );
        console.log(response.data.student.getClass);
        const data = response.data;
        commit("set_attendancemore", data);
      } catch (error) {
        console.log("error");
        alert(error);
      }
    }
    // post request..
  },
  mutations: {
    //used for changing the state
    set_attendancemore: (state, attendancemore) =>
      (state.attendancemore = attendancemore)
  },
  modules: {}
};
