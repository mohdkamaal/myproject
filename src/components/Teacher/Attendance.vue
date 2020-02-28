<template>
  <div>
    <v-tabs v-model="tabs" centered>
      <v-tab>Absent</v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col class="d-flex" cols="6">
              <v-select :items="Class" label="Class" outlined></v-select>
            </v-col>

            <v-col class="d-flex" cols="6">
              <v-select :items="Section" label="Section" outlined></v-select>
            </v-col>
            <v-col class="d-flex" cols="6">
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
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="d-flex" cols="6">
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
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          stu.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                        <v-divider></v-divider>
                        <v-progress-linear
                          color="light-blue"
                          height="10"
                          value="10"
                          striped
                          >20%</v-progress-linear
                        >
                      </v-list-item-content>
                      <div class="float-right">
                        <v-col cols="12">
                          <v-chip color="error" text-color="white" class
                            >Completed</v-chip
                          >
                        </v-col>
                        <v-col cols="12">
                          <v-chip color="success" text-color="white" class
                            >Pending</v-chip
                          >
                        </v-col>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <div>
            <v-chip color="purple" text-color="white" class>Total</v-chip>
            <v-chip color="green" text-color="white" class>Present</v-chip>
            <v-chip color="red" text-color="white" class>Absent</v-chip>
          </div>
        </v-container>
      </v-tab-item>
      <v-tab>Present</v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col class="d-flex" cols="6">
              <v-select :items="Class" label="Class" outlined></v-select>
            </v-col>

            <v-col class="d-flex" cols="6">
              <v-select :items="Section" label="Section" outlined></v-select>
            </v-col>
            <v-col class="d-flex" cols="6">
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
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="d-flex" cols="6">
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
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          stu.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                        <v-divider></v-divider>
                        <v-progress-linear
                          color="light-blue"
                          height="10"
                          value="10"
                          striped
                          >20%</v-progress-linear
                        >
                      </v-list-item-content>
                      <div class="float-right">
                        <v-col cols="12">
                          <v-chip color="error" text-color="white" class
                            >Completed</v-chip
                          >
                        </v-col>
                        <v-col cols="12">
                          <v-chip color="success" text-color="white" class
                            >Pending</v-chip
                          >
                        </v-col>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <div>
            <v-chip color="purple" text-color="white" class>Total</v-chip>
            <v-chip color="green" text-color="white" class>Present</v-chip>
            <v-chip color="red" text-color="white" class>Absent</v-chip>
          </div>
        </v-container>
      </v-tab-item>
      <v-tab>Overall</v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col class="d-flex" cols="6">
              <v-select :items="Class" label="Class" outlined></v-select>
            </v-col>

            <v-col class="d-flex" cols="6">
              <v-select :items="Section" label="Section" outlined></v-select>
            </v-col>
            <v-col class="d-flex" cols="6">
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
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="d-flex" cols="6">
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
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn text color="primary" @click="$refs.menu.save(date)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">{{
                          stu.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                        <v-divider></v-divider>
                        <v-progress-linear
                          color="light-blue"
                          height="10"
                          value="10"
                          striped
                          >20%</v-progress-linear
                        >
                      </v-list-item-content>
                      <div class="float-right">
                        <v-col cols="12">
                          <v-chip color="error" text-color="white" class
                            >Completed</v-chip
                          >
                        </v-col>
                        <v-col cols="12">
                          <v-chip color="success" text-color="white" class
                            >Pending</v-chip
                          >
                        </v-col>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <div>
            <v-chip color="purple" text-color="white" class>Total</v-chip>
            <v-chip color="green" text-color="white" class>Present</v-chip>
            <v-chip color="red" text-color="white" class>Absent</v-chip>
          </div>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiCalendar } from "@mdi/js";
import calander from "../Calendercall.vue";

export default Vue.extend({
  data: () => ({
    tabs: null,
    Calender: mdiCalendar,
    components: {
      calander
    },
    date: new Date().toISOString().substr(0, 10),
    menu: false,

    Class: ["I", "II", "III", "IV", "v"],
    Section: ["A", "B", "C", "D"],
    Topic: ["t1", "t2", "t3", "t4", "t5"],
    Subject: ["English", "Hindi", "Urdu", "Science", "Maths"],

    balance: [
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh",
        mobile: "9876567768"
      },
      {
        name: "Happy",
        rollno: "15",
        father: "Pradeep kumar",
        mobile: "7656347700"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812"
      },
      {
        name: "Ravi kumar",
        rollno: "22",
        father: "Rakesh kumar",
        mobile: "9670436638"
      },
      {
        name: "Anjali rawat",
        rollno: "3",
        father: "Laxhman Rawat",
        mobile: "9876567768"
      },
      {
        name: "Srishti rawat",
        rollno: "24",
        father: "Mukesh rawat",
        mobile: "9876567768"
      },
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh",
        mobile: "9876567768"
      },
      {
        name: "Billu barber",
        rollno: "3",
        father: "Banti ",
        mobile: "9876567768"
      }
    ],
    schoolExpense: [
      {
        tution: "2000",
        transport: "1000",
        security: "500",
        assesment: "600",
        library: "500",
        admission: "2000",
        lateFee: "600",
        others: "250"
      }
    ]
  })
});
</script>

<style lang="scss" scoped></style>
