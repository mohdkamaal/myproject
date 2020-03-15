<template>
  <v-container>
    <!-- // Header -->
    <div class="text-center">
      <v-card>
        <h1 class="purple--text mb-10">Student Details</h1>
      </v-card>
    </div>
    <!-- //Student Cards -->
    <div>
      <v-alert>
        <v-layout>
          <v-row>
            <v-col v-for="card in cards" :key="card.id" offset="1">
              <!-- <v-hover v-slot:default="{ hover }" open-delay="200"> -->
              <v-card :elevation="hover ? 16 : 2" height="450" width="350">
                <!----------img---->
                <v-col>
                  <div id="avatar" class="text-center">
                    <v-avatar size="100" color="grey" class="mt-n10"></v-avatar>
                  </div>
                </v-col>
                <!--------->
                <div>
                  <v-card-title class=".font-weight-light justify-center">{{ card.name }}</v-card-title>
                </div>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.data"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.value"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <v-progress-linear color="light-blue" height="20" value="40" striped>40%</v-progress-linear>
                </v-list>
                <!---------------------->
                <!----------chip----------->

                <!--------------/chip---------->
              </v-card>
              <!-- </v-hover> -->
            </v-col>
          </v-row>
        </v-layout>
      </v-alert>
    </div>
    <!-- // Subjects Cards -->
    <div>
      <h3 class="purple--text mt-10">All Subjects Teacher</h3>
      <v-divider></v-divider>
      <v-layout ma-5>
        <v-sheet class="mx-auto" elevation="8" max-width="1100">
          <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
            <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active}">
              <div class="text-center">
                <v-card class="ma-4" height="170" width="150" @click="active">
                  <v-list>
                    <v-list-item-avatar color="grey" size="85"></v-list-item-avatar>
                    <v-list-item-content class>
                      <v-list-item-title class="title mx-auto">Teacher Name</v-list-item-title>
                      <v-divider></v-divider>
                      <v-list-item-text class="body-2">
                        <p>Subject</p>
                      </v-list-item-text>
                    </v-list-item-content>
                  </v-list>
                </v-card>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-layout>
    </div>
    <!-- // Circular Content  -->
    <h3 class="purple--text mt-10">Performance</h3>
    <v-divider></v-divider>

    <template>
      <div class="text-center">
        <v-row>
          <v-col>
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              :value="value"
              color="teal"
            >{{ value }}</v-progress-circular>
            <!-- <h3 class="purple--text"> All Test</h3> -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">All Test</v-btn>
              </template>
              <v-card>
                <v-card-title class="text-center">
                  <span class="headline">This Session</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-simple-table height="300px">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Subject</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Total</th>
                            <th class="text-left">Obtained</th>

                            <th class="text-left">Status</th>
                          </tr>
                        </thead>
                        <!-- Table 2 Data -->
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.subject }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>

                            <td>{{ item.returndate }}</td>
                            <td>
                              <v-chip color="purple--text">{{ item.status }}</v-chip>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col>
            <v-progress-circular
              :rotate="-90"
              :size="150"
              :width="15"
              :value="value"
              color="primary"
            >{{ value }}</v-progress-circular>
            <!-- <h3 class="purple--text">Assignment</h3> -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">Assignment</v-btn>
              </template>
              <v-card>
                <v-card-title class="text-center">
                  <span class="headline">Assessment 1</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-simple-table height="300px">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Subject</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Total</th>
                            <th class="text-left">Obtained</th>

                            <th class="text-left">Status</th>
                          </tr>
                        </thead>
                        <!-- Table 2 Data -->
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.subject }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>

                            <td>{{ item.returndate }}</td>
                            <td>
                              <v-chip color="purple--text">{{ item.status }}</v-chip>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-container>
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-title class="text-center">
                  <span class="headline">Assessment 2</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-simple-table height="300px">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Subject</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Total</th>
                            <th class="text-left">Obtained</th>

                            <th class="text-left">Status</th>
                          </tr>
                        </thead>
                        <!-- Table 2 Data -->
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.subject }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>

                            <td>{{ item.returndate }}</td>
                            <td>
                              <v-chip color="purple--text">{{ item.status }}</v-chip>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col>
            <v-progress-circular
              :rotate="90"
              :size="150"
              :width="15"
              :value="value"
              color="red"
            >{{ value }}</v-progress-circular>
            <!-- <h3 class="purple--text">Curricular</h3> -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">Curricular</v-btn>
              </template>
              <v-card>
                <v-card-title class="text-center">
                  <span class="headline">Extra Curricular</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-simple-table height="300px">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Exam</th>
                            <th class="text-left">Date</th>
                            <th class="text-left">Grade</th>

                            <th class="text-left">Status</th>
                          </tr>
                        </thead>
                        <!-- Table 2 Data -->
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.subject }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>

                            <td>
                              <v-chip color="purple--text">{{ item.status }}</v-chip>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <v-col>
            <v-progress-circular
              :rotate="180"
              :size="150"
              :width="15"
              :value="value"
              color="pink"
            >{{ value }}</v-progress-circular>
            <h3 class="purple--text">Over All</h3>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
    </template>
    <!-- // Buttons three  -->
    <h3 class="purple--text mt-10">Academic Details</h3>
    <v-divider></v-divider>
    <div class="text-center mt-10">
      <v-row>
        <v-col>
          <v-avatar color="grey" size="100">
            <i class="material-icons md-36">directions_bus</i>
          </v-avatar>
          <h3 class="purple--text">Transport</h3>
        </v-col>
        <v-col>
          <v-avatar color="grey" size="100"></v-avatar>
          <h3 class="purple--text">Hostel</h3>
        </v-col>
        <v-col>
          <v-avatar color="grey" size="100"></v-avatar>
          <h3 class="purple--text">Library</h3>
        </v-col>
        <v-col>
          <v-avatar color="grey" size="100"></v-avatar>
          <h3 class="purple--text">Fee Details</h3>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-container>
</template>



<script lang="ts">
import { mdiBusSchool } from "@mdi/js";
import Vue from "vue";
export default Vue.extend({
  name: "StudentDetaiils",
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
  data: () => ({
    bus: mdiBusSchool,
    interval: {},
    value: 0,
    dialog: false,

    Class: ["I", "II", "III", "IV", "v"],
    Section: ["A", "B", "C", "D"],
    item: 1,
    items: [
      { title: "Pooja", data: "ID:", value: "123456" },
      { title: "Pooja", data: "Roll No.:", value: "145687515" },
      { title: "Pooja", data: "House Name:", value: "Blue Ranger" },
      { title: "Pooja", data: "DOB:", value: "09/09/1997" },
      { title: "Pooja", data: "Father's Name:", value: "Mr. Krishan Lal" },
      { title: "Pooja", data: "Father's Mobile:", value: "9897124521" }
    ],
    cards: [
      {
        name: "Pooja kapri"
      },
      {
        name: "Pooja kapri"
      }
    ],

    desserts: [
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Returned"
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Issued"
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Issued"
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Issued"
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Issued"
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Issued"
      },
      {
        id: "1001",
        subject: "English",
        title: "The shadow",
        author: "Dr.shubham",
        stuid: "106",
        fine: "06",
        returndate: "true",
        action: "Return",
        status: "Issued"
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>