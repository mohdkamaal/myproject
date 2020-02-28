<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-card width="400" height="150">
                <v-card-title color="grey" class="justify-center">Today</v-card-title>
                <v-chip color="green" class="white--text justify-center">Present</v-chip>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card width="400" height="150">
                <v-card-title primary-title class="justify-center">Last Week</v-card-title>
                <v-chip color="green" class="white--text">Present</v-chip>
                <v-chip color="red" class="white--text">Absent</v-chip>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-card width="400" height="150">
                <v-card-title primary-title class="justify-center">Last Month</v-card-title>
                <v-chip color="green" class="white--text">Present</v-chip>
                <v-chip color="red" class="white--text">Absent</v-chip>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card width="400" height="150">
                <v-card-title primary-title class="justify-center">Session</v-card-title>
                <v-chip color="green" class="white--text">Present</v-chip>
                <v-chip color="red" class="white--text">Absent</v-chip>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script lang="ts">
import Vue from "vue";
import AttendanceMore from "./Attendance_more.vue";
import { mdiCalendar } from "@mdi/js";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  name: "AttendanceP",
  components: {
    // AttendanceMore
  },
  mounted() {
    this.$store.dispatch("loadAttandance");
  },
  computed: {
    ...mapState(["Attandance"])
    // computedDateFormatted() {
    //   return this.formatDate(this.date);
    // }
  },

  data: () => ({
    // date: new Date().toISOString().substr(0, 10),
    // dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    // menu1: false,
    // menu2: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    calender: mdiCalendar,
    return: {},

    title: ["Today", "Last Week", "Last Month", "Seesion"]
  }),

  watch: {
    // date() {
    //   this.dateFormatted = this.formatDate(this.date);
    // }
  },

  methods: {
    // formatDate(date) {
    //   if (!date) return null;
    //   const [year, month, day] = date.split("-");
    //   return `${month}/${day}/${year}`;
    // },
    // parseDate(date) {
    //   if (!date) return null;
    //   const [month, day, year] = date.split("/");
    //   return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    // }
    // ...mapActions(["loadAttandance"])
  }
});
</script>

<style lang="scss" scoped>
.AmitSIr {
  text-align: center;
}
</style>
