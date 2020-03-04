<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Conference</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Conference</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Done</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <h2 class="text-center purple--text">Conference To</h2>
          <v-divider></v-divider>
          <v-progress-linear color="purple" rounded value="100"></v-progress-linear>
          <v-row>
            <v-col cols="4">
              <v-checkbox v-model="checkbox" label="Teacher" required></v-checkbox>
            </v-col>
            <v-col cols="4">
              <v-checkbox v-model="checkbox" label="Staff"></v-checkbox>
            </v-col>
            <v-col cols="4">
              <v-checkbox v-model="checkbox" label="Director"></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-select :items="items" label="Date" outlined></v-select>
            </v-col>
            <v-col cols="4">
              <v-select :items="items" label="Time" outlined></v-select>
            </v-col>
            <v-col cols="4">
              <v-select :items="items" label="Venue" outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                label="Write Conference Agenda"
                auto-grow
                outlined
                rows="3"
                row-height="25"
              ></v-textarea>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-btn rounded color="purple" dark>Send</v-btn>
          </div>

          <h3 class="purple--text">Preview</h3>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="6" v-for="one in Preview" :key="one">
              <v-card>
                <v-card-text>{{one.Detail}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Conference",
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

    Preview: [
      {
        Title: "",
        Detail: "Today is Holiday because of Heavy Rainfall"
      },
      {
        Title: "",
        Detail: "Today is Holiday because of Heavy Rainfall"
      },
      {
        Title: "",
        Detail: "Today is Holiday because of Heavy Rainfall"
      },
      { Title: "", Detail: "Today is Holiday because of Heavy Rainfall" }
    ]
  })
});
</script>

<style lang="scss" scoped></style>
