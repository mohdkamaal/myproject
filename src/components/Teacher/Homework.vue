<template>
  <div>
    <v-tabs v-model="tabs" centered>
      <v-tab>ASSIGN</v-tab>

      <v-tab-item>
        <v-container>
          <v-card class="pa-8">
            <v-row>
              <v-col class="d-flex" cols="4">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Picker in menu"
                      :prepend-icon="Calender"
                      readonly
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-col class="d-flex" cols="4">
                <v-select v-model="selectedClass" label=" Class" :items="work.class" outlined></v-select>
              </v-col>

              <v-col class="d-flex" cols="4">
                <v-select v-model="selectedSection" label=" Section" :items="sections" outlined></v-select>
              </v-col>

              <!-- <v-col class="d-flex" cols="4" v-for="s in section" :key="s">
                <v-select :items="s" label="sec" outlined></v-select>
              </v-col>-->

              <!-- <select v-model="selectedClass">
                <option value>Select a Class</option>
                <option v-for="i in work" :key="i">{{i}}</option>
              </select>-->
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="6">
                <v-select
                  :items="subjects"
                  v-model="selectedSubject"
                  label="Subjects"
                  item-text="subject"
                  outlined
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="6">
                <v-select :items="topics" label="Topic" outlined></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12">
                <v-textarea clearable clear-icon="x" label="Homework" outlined></v-textarea>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-tab-item>

      <v-tab>PREVIOUS</v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" v-for="(stu, index) in balance" :key="index">
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-row>
                    <v-col cols="4">
                      <p>Class - XII</p>
                    </v-col>
                    <v-col cols="4">
                      <p>Section - B</p>
                    </v-col>
                    <v-col cols="4">
                      <p>08/02/2020</p>
                    </v-col>
                    <v-col cols="6">
                      <p>English</p>
                    </v-col>
                    <v-col cols="6">
                      <p>Poetry</p>
                    </v-col>
                  </v-row>

                  <!-- expansion-panel starts -->
                  <v-expansion-panels hover>
                    <v-expansion-panel>
                      <v-expansion-panel-header>Status</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-list>
                          <v-list-item>
                            <v-list-item-avatar color="grey" size="100"></v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title class="title">
                                {{
                                stu.name
                                }}
                              </v-list-item-title>
                              <v-divider></v-divider>
                              <v-list-item-text class="body-2">
                                <p>Roll no: {{ stu.rollno }}</p>
                                <p>Father : {{ stu.father }}</p>
                                <p>Mobile: {{ stu.mobile }}</p>
                              </v-list-item-text>
                            </v-list-item-content>
                            <div class="float-right">
                              <v-col cols="12">
                                <v-chip color="error" text-color="white" class>Completed</v-chip>
                              </v-col>
                              <v-col cols="12">
                                <v-chip color="success" text-color="white" class>Pending</v-chip>
                              </v-col>
                            </div>
                          </v-list-item>
                        </v-list>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiCalendar } from "@mdi/js";
import calander from "../Calendercall.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  name: "Homework",
  mounted() {
    this.$store.dispatch("homework");
    // this.$store.dispatch("section");
    // this.$store.dispatch("subjects");
  },
  methods: {
    ...mapActions(["homework"]),
    ...mapMutations(["set_homework"])
    // ...mapActions(["section"]),
    // ...mapMutations(["set_section"]),
    // ...mapActions(["subjects"]),
    // ...mapMutations(["set_subjects"])
  },
  computed: {
    ...mapState(["homework"]),
    // ...mapState(["section"]),
    // ...mapState(["subjects"])
    ...mapGetters(["work"])
  },

  watch: {
    selectedClass: function() {
      // Clear previously selected values
      this.sections = [];
      this.subjects = [];
      this.topics = [];
      this.selectedSection = "";
      this.selectedSubject = "";
      this.selectedTopic = "";
      // Populate list of countries in the second dropdown

      this.sections = this.work[this.selectedClass].section;
    },
    selectedSection: function() {
      // Clear previously selected values
      this.subjects = [];
      this.topics = [];
      this.selectedSubject = "";
      this.selectedTopic = "";
      // Now we have a continent and country. Populate list of cities in the third dropdown

      this.subjects = this.work[this.selectedClass][
        this.selectedSection
      ].subject;
    },
    selectedSubject: function() {
      // Clear previously selected values
      this.topics = [];
      this.selectedTopic = "";
      // Now we have a continent and country. Populate list of cities in the third dropdown

      this.topics = this.work[this.selectedClass][this.selectedSection][
        this.selectedSubject
      ];
    }
  },

  data: () => ({
    tabs: null,
    Calender: mdiCalendar,
    components: {
      calander
    },
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    // countries
    sections: [],
    // cities
    subjects: [],

    topics: [],
    // Class
    selectedClass: "",
    // Section
    selectedSection: "",
    // Subject
    selectedSubject: "",
    selectedTopic: ""

    // Class: ["I", "II", "III", "IV", "v"],
    // Section: ["A", "B", "C", "D"],
    // Topic: ["t1", "t2", "t3", "t4", "t5"],
    // Subject: ["English", "Hindi", "Urdu", "Science", "Maths"],

    // balance: [
    //   {
    //     name: "Muskesh Singh",
    //     rollno: "3",
    //     father: "Mahesh Singh",
    //     mobile: "9876567768"
    //   }
    // ]
  })
});
</script>

<style lang="scss" scoped></style>
