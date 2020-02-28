<template>
  <!-- toolbar dialog -->
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">School Calender</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>School Calender</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
        <!-- content -->
        <v-container>
          <v-expansion-panels>
            <v-expansion-panel v-for="calender in months" :key="calender.name">
              <v-expansion-panel-header>{{
                calender.name
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Date</th>
                        <th class="text-left">Day</th>
                        <th class="text-left">Holiday</th>
                        <th class="text-left">Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="tabledata in data" :key="tabledata.date">
                        <td>{{ tabledata.date }}</td>
                        <td>{{ tabledata.day }}</td>
                        <td>{{ tabledata.holiday }}</td>
                        <td>{{ tabledata.events }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

// script
<script>
export default {
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

    months: [
      { name: "January" },
      { name: "February" },
      { name: "March" },
      { name: "April", txt: "Frozen Yogurt", calories: 159 },
      { name: "May" },
      { name: "June" },
      { name: "July" },
      { name: "August" },
      { name: "September" },
      { name: "October" },
      { name: "November" },
      { name: "December" }
    ],

    data: [
      { date: 1, day: "Monday", holiday: "New Year", events: "-" },

      { date: 2, day: "Monday", holiday: "New Year", events: "-" },

      { date: 3, day: "Monday", holiday: "New Year", events: "-" }
    ]
  })
};
</script>
