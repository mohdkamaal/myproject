import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import attendance from "./attendanceP";
import attendancemore from "./Attendance_morestore";
import timetable from "./timetable_admin";
import vatsw from "./VATSW";
import feemodule from "./FeeModule";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    //data
  },
  actions: {
    // method
  },
  mutations: {
    //used for changing the state
  },
  modules: {
    attendance,
    attendancemore,
    vatsw,
    feemodule
  }
});
