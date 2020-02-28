import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import AttentanceModule from "./Attendance";
import AttendanceMore from "./Attendance_morestore";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    Attandance: [],
    AttendanceMore: []
  },
  mutations: {
    SET_ATTANDANCE(state, Attandance) {
      state.Attandance = Attandance;
    },
    SET_ATTANDANCE_MORE(state, AttandanceMore) {
      state.AttendanceMore = AttandanceMore;
    }
  },
  actions: {
    loadAttandance({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/parent/1/student/attandance")
        .then(data => {
          console.log(data.data);
          let Attandance = data.data;
          commit("SET_ATTANDANCE", Attandance);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadAttandanceMore({ commit }) {
      axios
        .get("http://192.168.1.136:8000/api/parent/1/profile")
        .then(data => {
          console.log(data.data);
          let AttandanceMore = data.data;
          commit("SET_ATTANDANCE_MORE", AttandanceMore);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {
    // AttendanceOne: AttentanceModule
    // Attendance_more: AttendanceMore
  }
});
