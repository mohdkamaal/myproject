<template>
  <div>
    <v-container>
      <v-tabs v-model="value" centered>
        <v-tab>Create</v-tab>
        <v-tab-item>
          <v-row>
            <v-col cols="6">
              <v-row>
                <v-col cols="6">
                  <v-select :items="Class" label="Class" outlined></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select :items="Class" label="Section" outlined></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-select :items="Class" label="Subject" outlined></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card class="mx-auto">
                    <v-list three-line>
                      <template v-for="(item, index) in items">
                        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                        <v-list-item v-else :key="item.title" @click>
                          <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </template>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-card v-for="(teacher, index) in balance" :key="index">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar color="grey" size="100"></v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="title">
                        {{
                        teacher.name
                        }}
                      </v-list-item-title>
                      <v-divider></v-divider>
                      <v-list-item-text class="body-2">
                        <p>School ID : {{ teacher.schoolid }}</p>
                        <p>Class Teacher : {{ teacher.classteacher }}</p>
                        <p>Special Skill : {{ teacher.specialskill }}</p>
                      </v-list-item-text>
                      <v-btn color="success" rounded>Hindi</v-btn>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>

            <v-col cols="6" class="pa-2"></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-expansion-panels>
                <v-expansion-panel v-for="days in expand" :key="days">
                  <v-expansion-panel-header>{{days}}</v-expansion-panel-header>
                  <v-expansion-panel-content v-for="p in periods" :key="p">{{p}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-btn color="success" rounded>Assign</v-btn>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "timetable_admin",
  data: () => ({
    balance: [
      {
        name: "Muskesh Singh",
        schoolid: "458565",
        classteacher: "Mahesh Singh",
        specialskill: "English Grammar"
      }
    ],

    items: [
      { header: " Teacher" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Mukesh Singh",
        subtitle: "Hindi"
      }
    ],

    expand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],

    periods: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"]
  })
});
</script>

<style lang="scss" scoped>
</style>