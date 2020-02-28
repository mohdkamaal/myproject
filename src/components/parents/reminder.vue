<template>
  <!-- toolbar dialog -->
  <v-container>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Reminder</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Reminder</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <!-- content -->
        <v-container>
          <v-card>
            <label class="font-weight-bold">Reminder Me To</label>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="6" lg="2">
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
                      label="Pick Date"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      :prepend-icon="calender"
                      @blur="date = parseDate(dateFormatted)"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-btn color="primary" dark>Pick Time</v-btn>
            </v-row>

            <div class="d-flex">
              <v-checkbox v-model="Disabled" label="Repeat"></v-checkbox>
            </div>
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, i) in 1" :key="i">
                <v-expansion-panel-header>Pick Days</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="light grey"
                    v-for="days in WeekDays"
                    :key="days.name"
                    >{{ days.name }}</v-btn
                  >
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-spacer></v-spacer>
            <v-checkbox v-model="Disabled" label="Vibrate Only"></v-checkbox>
            <div class="text-center">
              <v-btn color="grey light">Delete</v-btn>
            </div>
            <div class="text-end">
              <v-btn rounded color="primary" dark>Set</v-btn>
            </div>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
// script

<script>
import { mdiCalendar } from "@mdi/js";
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,

    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    calender: mdiCalendar,

    WeekDays: [
      { name: "S" },
      { name: "M" },
      { name: "T" },
      { name: "W" },
      { name: "T" },
      { name: "F" },
      { name: "S" }
    ]
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
