<template>
  <!-- toolbar dialog -->
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Query</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Query To Subject Teacher</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>

        <!-- content -->
        <v-container>
          <v-layout row>
            <v-col cols="6" v-for="chips in days" :key="chips.name">
              <v-card shaped="true">
                <v-list-item>
                  <v-list-item-avatar size="100" color="blue">
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{ chips.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ chips.subject }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>{{ email }}</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>{{ message }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

// script

<script lang="ts">
import Vue from "vue";
import { mdiCalendar, mdiEmail, mdiMessage } from "@mdi/js";
export default Vue.extend({
  name: "qst",
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    calender: mdiCalendar,
    email: mdiEmail,
    message: mdiMessage,

    days: [
      { name: "Mathematics", subject: "Rekha Joshi" },

      { name: "Science", subject: "Mukesh Sir" },

      { name: "Computer", subject: "Amit Sir" },

      { name: "English", subject: "Dinesh Singh" }
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
});
</script>

<style lang="scss" scoped>
.AmitSIr {
  text-align: center;
}
</style>
