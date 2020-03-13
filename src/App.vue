<template>
  <v-app>
    <v-content>
      <!-- <HelloWorld /> -->
      <!-- <Homework /> -->
      <!-- <attendanceP /> -->
      <Test />
      <!-- <Attendance_more /> -->
      <!-- <UserDetails /> -->
      <!-- <TestA /> -->
      <!-- <timetable_admin /> -->
      <!-- <VATSW /> -->
      <!-- <Announcement /> -->
      <!-- <conference /> -->
      <!-- <FeeModule /> -->
      <!-- <navbar /> -->
      <!-- <Cards /> -->
      <!-- <dashboard /> -->
      <!-- <qst /> -->
      <!-- <reminder /> -->
      <!-- <FeeModule /> -->
      <!-- <SchoolNews /> -->
      <!-- <SchoolCalender /> -->
      <!-- <Session /> -->
      <ReturnBooks />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

// // Teacher Panel
// import Homework from "./components/Teacher/Homework.vue";
// import Attendance from "./components/Teacher/Attendance.vue";
// import HelloWorld from "./components/HelloWorld.vue";
//
// // Parents Panel
// import Attendance_more from "./components/parents/Attendance_more.vue";
// import FeeModule from "./components/parents/FeeModule.vue";
// import reminder from "./components/parents/reminder.vue";
// import SchoolNews from "./components/parents/SchoolNews.vue";
// import Test from "./components/parents/test.vue";
// import qst from "./components/parents/qst.vue";
// import dashboard from "./components/parents/dashboard.vue";

// // Admin Panel
// import timetable_admin from "./components/Admin/timetable_admin.vue";
// import VATSW from "./components/Admin/VATSW.vue";
// import Announcement from "./components/Admin/Announcement.vue";
// import Conference from "./components/Admin/Conference.vue";

// import navbar from "./components/Navbar";
// import Cards from "./components/cards";
// import UserDetails from "./components/UserDetails.vue";
// import TestA from "./components/Test_a.vue";
// import Session from "./components/Admin/Session.vue";
import ReturnBooks from "./components/Admin/ReturnBooks.vue";
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
    // FeeModule
    // navbar,
    // Cards,
    // dashboard,
    // qst
    // reminder
    // FeeModule
    // SchoolNews
    // Session
    ReturnBooks
  },

  data: () => ({
    //
  })
});
</script>
