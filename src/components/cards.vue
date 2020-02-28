<template>
  <!-- code for cards -->
  <div>
    <h3 class="subheading grey--text">Page Four</h3>

    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 md4 v-for="person in employee" :key="person.name">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="pa-5 ma-5 py-6 mx-6"
              :elevation="hover ? 8 : 2"
              shaped="true"
            >
              <v-card-text
                class="text-center font-weight-bold title purple--text"
                >{{ person.name }}</v-card-text
              >
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

// script
<script>
export default {
  data() {
    return {
      employee: [
        { name: "VIEW CLASS & CREATE SECTION" },
        { name: "CREATE TEACHER & VIEW ALL CATEGORIES" },
        { name: "CREATE EMPLOYEES & VIEW ACTIVITIES" },
        { name: "TRANSPORTATION" },
        { name: "ACCOUNT" },
        { name: "LIBRARY" },
        { name: "HOSTEL" },
        { name: "HEALTH" },
        { name: "STUDENT T.C" }
      ]
    };
  }
};
</script>

<style scoped></style>
