<template>
  <div>
    <v-container>
      <h1 class="text-center">View All Teacher Subject Wise</h1>
      <v-divider></v-divider>

      <v-expansion-panels>
        <v-expansion-panel v-for="subjects in expand" :key="subjects">
          <v-expansion-panel-header>{{subjects}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="4" v-for="(teacher, index) in balance" :key="index">
                <v-card>
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
                          <p>Class : {{ teacher.class }}</p>
                          <p>
                            Status :
                            <v-chip color="green" class="white--text">{{ teacher.status }}</v-chip>
                          </p>
                          <p background-color="purple" class>{{ teacher.time }}</p>
                        </v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "VATSW",
  data: () => ({
    expand: [
      "Hindi",
      "English",
      "Maths",
      "Physics",
      "Chemistry",
      "Computer",
      "Biology"
    ],

    balance: [
      {
        name: "Muskesh Singh",
        class: "X",
        status: "Present",
        time: "Full Time"
      },
      {
        name: "Mohd Kamaal",
        class: "XII",
        status: "Present",
        time: "Full Time"
      },
      {
        name: "Dinesh Panda",
        class: "XI",
        status: "Present",
        time: "Full Time"
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
</style>