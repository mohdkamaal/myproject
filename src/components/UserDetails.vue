<template>
  <div class="users">
    <!-- <h1>User Details</h1>
    <v-form v-on:submit="addUser">
      <input
        type="text"
        v-model="newUser.name"
        placeholder="enter your name here"
      />
      <br />
      <input
        type="text"
        v-model="newUser.email"
        placeholder="enter your email here"
      />
      <br />
      <input type="submit" value="submit" />
    </v-form>
    <ul>
      <li v-for="User in Users" :key="User">
        {{ User.name }}:{{ User.email }}
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    Users: [
      {
        name: "John Doe",
        email: "abc@gmail.com",
        contacted: false
      },

      {}
    ],

    methods: {
      // addUser: function(e) {
      //   this.users.push({
      //     name: this.newUser.name,
      //     email: this.newUser.email,
      //     contacted: false
      //   });
      //   e.preventDefault();
      // }
    }
  })
});
</script>

<style lang="scss" scoped></style>
