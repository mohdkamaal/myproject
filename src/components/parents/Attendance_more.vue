<template>
  <v-container>
    <v-card class="mx-auto">
      <h3 class="text-center ma-5 grey white--text">View Attendance Date Wise</h3>
      <v-layout row wrap ma-5>
        <v-flex md6>
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="From"
                hint="MM/DD/YYYY format"
                persistent-hint
                :prepend-icon="calender"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex md6>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="computedDateFormatted"
                label="To"
                hint="MM/DD/YYYY format"
                persistent-hint
                :prepend-icon="calender"
                readonly
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="grey" size="100"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="title"
              >{{detailmore.student.first_name}} {{detailmore.student.last_name}}</v-list-item-title>
              <v-divider></v-divider>

              <v-list-item-text>
                <p>Roll No. :{{detailmore.student.getClass.pivot.roll}}</p>

                <p>Father Name :{{detailmore.parent.father_name}}</p>

                <p>Contact No. :{{detailmore.parent.father_contact}}</p>
              </v-list-item-text>
              <v-progress-linear
                color="light-blue"
                height="10"
                value="10"
                striped
              >{{detailmore.percentage}}%</v-progress-linear>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header class="text-center">View Details</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list>
                <v-data-table :headers="headers" :items="monthdata" class="elevation-1">
                  <template v-slot:item.total="{ item }">
                    <label color="purple darken-1 white--text">
                      {{
                      item.day
                      }}
                    </label>
                  </template>
                  <template v-slot:item.status="{ item }">
                    <v-chip color="green white--text">{{ item.status }}</v-chip>
                  </template>
                </v-data-table>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
import { mdiCalendar } from "@mdi/js";
export default Vue.extend({
  name: "AttendanceMore",
  components: {},
  mounted() {
    this.$store.dispatch("attendancemore");
  },
  computed: {
    ...mapState(["attendancemore"]),
    ...mapGetters(["detailmore"])
    // computedDateFormatted() {
    //   return this.formatDate(this.date);
    // }
  },

  data: () => ({
    // date: new Date().toISOString().substr(0, 10),
    // dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    // menu1: false,
    // menu2: false,
    calender: mdiCalendar,

    balance: [
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh",
        mobile: "9876567768"
      }
    ],

    headers: [
      {
        text: "Date",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Day", value: "day" },
      { text: "Status", value: "status" }
    ],

    monthdata: [
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      },
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      },
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      },
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      },
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      },
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      },
      {
        name: "08-08-2020",
        day: "Sunday",
        status: "Present"
      }
    ]
  })

  // watch: {
  //   date(val) {
  //     this.dateFormatted = this.formatDate(this.date);
  //   }
  // },

  // methods: {
  //   formatDate(date) {
  //     if (!date) return null;

  //     const [year, month, day] = date.split("-");
  //     return `${month}/${day}/${year}`;
  //   },
  //   parseDate(date) {
  //     if (!date) return null;

  //     const [month, day, year] = date.split("/");
  //     return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  //   }
  // }
});
</script>

<style lang="scss" scoped></style>
