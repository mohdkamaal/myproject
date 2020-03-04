<template>
  <v-app>
    <v-content>
      <!-- <HelloWorld /> -->
      <!-- <Homework /> -->
      <!-- <attendanceP /> -->
      <!-- <Test /> -->
      <!-- <Attendance_more /> -->
      <!-- <UserDetails /> -->
      <!-- <TestA /> -->
      <!-- <timetable_admin /> -->
      <!-- <VATSW /> -->
      <!-- <Announcement /> -->
      <!-- <conference /> -->
      <FeeModule />
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
// import attendanceP from "./components/parents/attendanceP.vue";
// import Test from "./components/parents/test.vue";
// import Attendance_more from "./components/parents/Attendance_more.vue";
// import timetable_admin from "./components/Admin/timetable_admin.vue";
// import VATSW from "./components/Admin/VATSW.vue";
// import Announcement from "./components/Admin/Announcement.vue";
// import Conference from "./components/Admin/Conference.vue";
import FeeModule from "./components/parents/FeeModule.vue";
export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    // Homework
    // attendanceP
    // Test
    // Attendance_more
    // UserDetails,
    // TestA
    // timetable_admin
    // VATSW
    // Announcement
    // Conference
    FeeModule
  },

  data: () => ({
    //
  })
});
</script>
