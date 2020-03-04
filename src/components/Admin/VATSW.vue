<template>
  <div>
    <v-container>
      <h1 class="text-center">View All Teacher Subject Wise</h1>
      <v-divider></v-divider>
      <div class="ma-12">
        <v-expansion-panels>
          <v-expansion-panel v-for="tt in wise" :key="tt">
            <v-expansion-panel-header>{{ tt.subject }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="4" v-for="(teacher, index) in tt.teacher" :key="index">
                  <v-card>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar color="grey" size="100"></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="title">{{teacher.first_name }}</v-list-item-title>
                          <v-divider></v-divider>
                          <v-list-item-text class="body-2">
                            <p>Class : {{ teacher.class }}</p>
                            <p>
                              Status :
                              <v-chip color="green" class="white--text">
                                {{
                                teacher.status
                                }}
                              </v-chip>
                            </p>
                          </v-list-item-text>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <div class="purple lighten-2">
                      <p class="white--text text-center">{{ teacher.time }}</p>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
export default Vue.extend({
  name: "VATSW",

  mounted() {
    this.$store.dispatch("vatsw");
  },
  computed: {
    ...mapState(["vatsw"]),
    ...mapGetters(["wise"])
    // computedDateFormatted() {
    //   return this.formatDate(this.date);
    // }
  },

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

<style lang="scss" scoped></style>
