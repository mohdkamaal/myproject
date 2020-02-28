<template>
  <v-app>
    <v-content>
      <!-- <HelloWorld /> -->
      <!-- <Homework /> -->
      <!-- <AttendanceP /> -->
      <!-- <Test /> -->
      <!-- <Attendance_more /> -->
      <!-- <UserDetails /> -->
      <!-- <TestA /> -->
      <!-- <timetable_admin /> -->
      <VATSW />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import Homework from "./components/Teacher/Homework.vue";
// import Attendance from "./components/Teacher/Attendance.vue";
// import UserDetails from "./components/UserDetails.vue";
// import TestA from "./components/Test_a.vue";
// import AttendanceP from "./components/parents/AttendanceP.vue";
// import Test from "./components/parents/test.vue";
// import Attendance_more from "./components/parents/Attendance_more.vue";
// import timetable_admin from "./components/Admin/timetable_admin.vue";
import VATSW from "./components/Admin/VATSW.vue";
export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    // Homework,
    // AttendanceP
    // Test
    // Attendance_more
    // UserDetails,
    // TestA
    // timetable_admin
    VATSW
  },

  data: () => ({
    //
  })
});
</script>
