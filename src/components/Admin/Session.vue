<template>
  <v-container>
    <v-layout>
      <v-flex md12 ma-5>
        <v-card>
          <h2 class="text-center">Session 2020-2021</h2>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md6>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar color="grey" size="100">O</v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title">teacher name</v-list-item-title>
                <v-divider></v-divider>
                <v-list-item-text class="body-2">
                  <p>Roll no: school id</p>
                  <p>Father : age group</p>
                  <p>Mobile: mobile no.</p>
                  <p>Mobile: subject</p>
                </v-list-item-text>
                <v-progress-linear color="light-blue" height="10" value="10" striped></v-progress-linear>
              </v-list-item-content>
              <div class="float-right"></div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex md6 offset-sm2>
        <v-row>
          <v-col cols="8" class="mx-auto">
            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar color="grey" size="60">O</v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title">teacher name</v-list-item-title>
                    <v-divider></v-divider>
                    <v-list-item-text class="body-2">
                      <p>Roll no: school id</p>
                      <p>Father : age group</p>
                    </v-list-item-text>
                    <v-chip class="text-center">Monitor 1</v-chip>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="8" class="mx-auto">
            <v-card shaped="true">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar color="grey" size="60">O</v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title">teacher name</v-list-item-title>
                    <v-divider></v-divider>
                    <v-list-item-text class="body-2">
                      <p>Roll no: school id</p>
                      <p>Father : age group</p>
                    </v-list-item-text>
                    <v-chip>Monitor 2</v-chip>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
    <h3>Top five students in a class</h3>
    <v-divider></v-divider>
    <v-layout>
      <v-flex ma-5 v-for="item in 5" :key="item">
        <v-card>
          <v-list>
            <!-- <v-list-item> -->
            <v-list-item-avatar color="grey" size="85">O</v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">teacher name</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-text class="body-2">
                <p>Roll no: school id</p>
              </v-list-item-text>
            </v-list-item-content>
            <!-- </v-list-item> -->
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <h3>Attendance of class</h3>
    <v-divider></v-divider>
    <v-layout>
      <v-flex ma-5>
        <v-row justify="space-around" align="center">
          <v-chip class="ma-2" color="green" text-color="white">Present</v-chip>
          <v-chip class="ma-2" color="green" text-color="white">Absent</v-chip>
          <v-chip class="ma-2" color="green" text-color="white">Strength 60%</v-chip>
        </v-row>
      </v-flex>
    </v-layout>
    <h3>Fee Pending</h3>
    <v-divider></v-divider>
    <v-layout ma-5>
      <v-sheet class="mx-auto" elevation="8" max-width="1100">
        <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="170"
              width="150"
              @click="toggle"
            >
              <v-list>
                <!-- <v-list-item> -->
                <v-list-item-avatar color="grey" size="85">O</v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">teacher name</v-list-item-title>
                  <v-divider></v-divider>
                  <v-list-item-text class="body-2">
                    <p>Roll no: 123456</p>
                  </v-list-item-text>
                </v-list-item-content>
                <!-- </v-list-item> -->
              </v-list>
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-layout>
    <h3>New Students</h3>
    <v-divider></v-divider>
    <v-layout ma-5>
      <v-sheet class="mx-auto" elevation="8" max-width="1100">
        <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="170"
              width="150"
              @click="toggle"
            >
              <v-list>
                <!-- <v-list-item> -->
                <v-list-item-avatar color="grey" size="85">O</v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">teacher name</v-list-item-title>
                  <v-divider></v-divider>
                  <v-list-item-text class="body-2">
                    <p>Roll no: 123456</p>
                  </v-list-item-text>
                </v-list-item-content>
                <!-- </v-list-item> -->
              </v-list>
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-layout>
    <h3>Transport service using</h3>
    <v-divider>\</v-divider>
    <v-layout ma-5>
      <v-sheet class="mx-auto" elevation="8" max-width="1100">
        <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="170"
              width="150"
              @click="toggle"
            >
              <v-list>
                <!-- <v-list-item> -->
                <v-list-item-avatar color="grey" size="85">O</v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">teacher name</v-list-item-title>
                  <v-divider></v-divider>
                  <v-list-item-text class="body-2">
                    <p>Roll no: 123456</p>
                  </v-list-item-text>
                </v-list-item-content>
                <!-- </v-list-item> -->
              </v-list>
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-layout>
    <h3>All students</h3>
    <v-divider></v-divider>
    <v-layout ma-5>
      <v-sheet class="mx-auto" elevation="8" max-width="1100">
        <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="170"
              width="150"
              @click="toggle"
            >
              <v-list>
                <!-- <v-list-item> -->
                <v-list-item-avatar color="grey" size="85">O</v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">teacher name</v-list-item-title>
                  <v-divider></v-divider>
                  <v-list-item-text class="body-2">
                    <p>Roll no: 123456</p>
                  </v-list-item-text>
                </v-list-item-content>
                <!-- </v-list-item> -->
              </v-list>
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { mdiCalendar } from "@mdi/js";
export default Vue.extend({
  name: "Test",
  data: () => ({
    model: null
  })
  // components: {},
  // mounted() {
  //   this.$store.dispatch("loadAttendanceMore");
  // },
  // computed: {
  //   ...mapState(["AttendanceMore"])
  // },
});
</script>
