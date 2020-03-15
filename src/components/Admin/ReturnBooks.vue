<template>
  <v-container>
    <!-- // Header -->
    <div class="text-center">
      <v-layout>
        <v-flex ma-5>
          <v-card>
            <h2 class="text-center purple--text">Ruturn Books</h2>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- // Student or ID card -->
      <v-card>
        <!-- <v-row>
          <v-col>
            <v-flex>
              <v-text-field class="ml-10" outlined label="Student ID"></v-text-field>
            </v-flex>
          </v-col>
          <v-col>
            <p class="mt-4">OR</p>
          </v-col>
          <v-col>
            <v-flex>
              <v-btn large color="purple" dark>Scan Student Barcode</v-btn>
            </v-flex>
          </v-col>
        </v-row>-->

        <v-row justify="center">
          <v-col lg="4">
            <v-text-field class="pa-2" outlined label="Student ID"></v-text-field>
          </v-col>
          <v-col md="auto" lg="1">
            <p class="ml-10 mt-4">OR</p>
          </v-col>
          <v-col lg="4">
            <v-btn class="pa-2 mt-3" large color="purple" dark>Scan Student Barcode</v-btn>
          </v-col>
        </v-row>

        <!-- // Student info card -->

        <v-row>
          <v-col cols="6" class="card">
            <v-card width="350">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar outlined class="stroke" size="60">O</v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title">Student name</v-list-item-title>
                    <v-divider></v-divider>
                    <v-list-item-text class="body-2">
                      <p>Roll no: 123456</p>
                      <p>Class : XII</p>
                    </v-list-item-text>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <!-- // Table 1 -->
    <div>
      <h3 class="ma-5 purple--text">Issue Details</h3>
    </div>
    <v-simple-table height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Issue ID</th>
            <th class="text-left">Subject</th>
            <th class="text-left">Title</th>
            <th class="text-left">Author</th>
            <th class="text-left">Student ID</th>
            <th class="text-left">Fine</th>
            <th class="text-left">Return Date</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <!-- Table 1 Data> -->
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.subject }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.stuid }}</td>
            <td>{{ item.fine }}</td>
            <td>{{ item.returndate }}</td>
            <td>
              <v-chip color="purple white--text">{{ item.action }}</v-chip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- // Table 2 -->
    <div>
      <h3 class="ma-5 purple--text">Today Returned Details</h3>
    </div>
    <div>
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Issue ID</th>
              <th class="text-left">Subject</th>
              <th class="text-left">Title</th>
              <th class="text-left">Author</th>
              <th class="text-left">Student ID</th>
              <th class="text-left">Fine</th>
              <th class="text-left">Return Date</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <!-- Table 2 Data -->
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.id }}</td>
              <td>{{ item.subject }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.stuid }}</td>
              <td>{{ item.fine }}</td>
              <td>{{ item.returndate }}</td>
              <td>
                <v-chip color="purple--text">{{ item.status }}</v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ReturnBooks",

  data: () => ({
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
.card {
  margin-left: 160px;

  .stroke {
    background-color: rgb(97, 97, 97);
    border: 3px solid #00b3ff;
  }
}
</style>