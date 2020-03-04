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
            <v-col cols="4">
              <v-card>
                <v-card-title
                  class="cyan lighten-3 justify-center font-weight-bold subtitle-1"
                >Today</v-card-title>
                <div class="text-center">
                  <v-chip
                    color="green"
                    class="white--text ma-3"
                    v-if="detail"
                  >Present {{ detail.today }}</v-chip>
                </div>
                <v-divider></v-divider>
                <v-card-title
                  primary-title
                  class="deep-purple accent-1 justify-center font-weight-bold subtitle-1"
                >Last Week</v-card-title>
                <div class="text-center">
                  <v-chip
                    color="green"
                    class="white--text ma-3"
                  >Present {{ detail.presentLastWeek }}</v-chip>

                  <v-chip color="red" class="white--text ma-3">Absent {{ detail.absentLastWeek }}</v-chip>
                </div>
                <v-divider></v-divider>
                <v-card-title
                  primary-title
                  class="blue lighten-2 justify-center font-weight-bold subtitle-1"
                >Last Month</v-card-title>
                <div class="text-center">
                  <v-chip
                    color="green"
                    class="white--text ma-3"
                  >Present {{ detail.presentLastMonth }}</v-chip>
                  <v-chip color="red" class="white--text ma-3">Absent {{ detail.absentLastMonth }}</v-chip>
                </div>
                <v-divider></v-divider>
                <v-card-title
                  primary-title
                  class="pink lighten-3 justify-center font-weight-bold subtitle-1"
                >Session</v-card-title>
                <div class="text-center">
                  <v-chip color="green" class="white--text ma-3">Present {{ detail.presentSession }}</v-chip>
                  <v-chip
                    color="red"
                    class="white--text justify-center ma-3"
                  >Absent {{ detail.absentSession }}</v-chip>
                </div>
              </v-card>
            </v-col>

            <v-col cols="6" offset="1">
              <AttendanceMore />
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
import { mapState, mapGetters } from "vuex";
export default Vue.extend({
  name: "attendanceP",
  components: {
    AttendanceMore
  },
  mounted() {
    this.$store.dispatch("attendance");
  },
  computed: {
    ...mapState(["attandance"]),
    ...mapGetters(["detail"])
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
