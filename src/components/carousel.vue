<template>
  <!-- <v-container> -->
  <v-row>
    <v-carousel show-arrows-on-hover>
      <v-carousel-item
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <!-- Here we add cards inside carousel -->
        <v-item-group mandatory>
          <v-container mt-5>
            <v-row>
              <v-col ml-2 v-for="n in 4" :key="n" cols="6" md="3">
                <v-item v-slot:default="{ active, toggle }">
                  <v-card
                    :color="active ? 'primary' : ''"
                    class="d-flex align-center"
                    dark
                    height="200"
                    @click="toggle"
                  >
                    <v-scroll-y-transition>
                      <div
                        v-if="active"
                        class="display-3 flex-grow-1 text-center"
                      >
                        hello
                      </div>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-carousel-item>
    </v-carousel>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
export default {
  name: "Carousel",
  data: () => ({
    items: [{ title: "Teacher" }, { title: "Student" }, { title: "Staff" }]
  })
};
</script>
