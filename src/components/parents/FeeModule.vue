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
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <!-- content here -->
        <v-container>
          <v-data-table :headers="headers" :items="monthdata" class="elevation-1">
            <template v-slot:item.total="{ item }">
              <v-chip color="purple darken-1 white--text">
                {{
                item.total
                }}
              </v-chip>
            </template>
            <template v-slot:item.periods="{ item }">
              <v-chip color="green white--text">{{ item.periods }}</v-chip>
            </template>
            <template v-slot:item.remaining="{ item }">
              <v-chip color="red white--text">{{ item.remaining }}</v-chip>
            </template>
          </v-data-table>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
// script starts
<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

      headers: [
        {
          text: "Months",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Total", value: "total" },
        { text: "Periods", value: "periods" },
        { text: "Remaining", value: "remaining" }
      ],
      monthdata: [
        {
          name: "January",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "February",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "March",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "April",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "May",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "June",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "July",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "August",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "September",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "October",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "November",
          total: 3000,
          periods: 2000,
          remaining: 500
        },
        {
          name: "December",
          total: 3000,
          periods: 2000,
          remaining: 500
        }
      ]
    };
  }
};
</script>
