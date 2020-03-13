<template>
  <v-container>
    <div class="text-center">
      <v-row>
        <v-col cols="6">
          <label>a</label>
        </v-col>
        <label>b</label>
        <v-col cols="6"></v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { mdiCalendar } from "@mdi/js";
export default Vue.extend({
  name: "Test",
  data: () => ({
    model: null
  })
  // components: {},
  // mounted() {
  //   this.$store.dispatch("loadAttendanceMore");
  // },
  // computed: {
  //   ...mapState(["AttendanceMore"])
  // },
});
</script>
