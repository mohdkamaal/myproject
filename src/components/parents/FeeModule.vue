<template>
  <!-- toolbar dialog -->
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Fee Module</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="text-center">Fee Module</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">done</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <!-- content here -->
        <v-container>
          <v-data-table :headers="headers" :items="fee" class="elevation-1">
            <!-- <template v-slot:fee.month="{fee}">
              <v-chip color="green white--text">{{fee.month}}</v-chip>
            </template>-->

            <template v-slot:fee.total="{fee}">
              <v-chip color="green white--text">{{fee.total }}</v-chip>
            </template>
            <template v-slot:fee.paid="{fee}">
              <v-chip color="green white--text">{{fee.paid}}</v-chip>
            </template>
            <template v-slot:fee.remaining="{fee}">
              <v-chip color="red white--text">{{ fee.remaining }}</v-chip>
            </template>
          </v-data-table>
          <!-- <v-data-table :headers="headers" class="elevation-1"> -->
          <!-- <v-data-table :headers="headers" class="elevation-1">
            <v-chip color="green white--text" v-for="f in fee" :key="f">{{f.fees.month}}</v-chip>

            <v-chip color="green white--text">{{f.total }}</v-chip>

            <v-chip color="green white--text">{{ f.fees.pivot.paid }}</v-chip>

            <v-chip color="red white--text">{{ f.remaining }}</v-chip>
          </v-data-table>-->
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
// script starts
<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import FeeModule from "../../store/FeeModule";
export default Vue.extend({
  name: "FeeModule",
  mounted() {
    this.$store.dispatch("feemodule");
  },
  methods: {
    ...mapActions(["feemodule"]),
    ...mapMutations(["set_feemodule"])
  },
  computed: {
    ...mapState(["feemodule"]),
    ...mapGetters(["fee"])
  },

  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

    headers: [
      {
        text: "Months",
        align: "left",
        sortable: false,
        value: "month"
      },
      { text: "Total", value: "total" },
      { text: "Paid", value: "paid" },
      { text: "Remaining", value: "remaining" }
    ]
    // monthdata: [
    //   {
    //     name: "January",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "February",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "March",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "April",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "May",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "June",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "July",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "August",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "September",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "October",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "November",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   },
    //   {
    //     name: "December",
    //     total: 3000,
    //     paid: 2000,
    //     remaining: 500
    //   }
    // ]
  })
});
</script>
