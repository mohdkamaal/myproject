<template>
  <div>
    <v-container>
      <v-card
        v-for="item in posts"
        :key="item"
        class="ma-4"
        max-width="500"
        height="200"
        center
      >
        <h3 class="text-center">API call card</h3>
        <br />

        <p>Email-> {{ item.email }}</p>

        <p>Contacts-> {{ item.contacts1 }}</p>
        <p>DOB-> {{ item.dob }}</p>
        <p>Gender-> {{ item.first_name }}</p>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "Test_a",

  mounted() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"])
  }
});
</script>

<style lang="scss" scoped></style>
