<template>
  <div>
    <v-app-bar dark color="purple darken-1">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-icon>mdi-apple-finder</v-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="36px">
          <img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            alt="avatar"
          />
        </v-avatar>
      </v-btn>

      <!--menu bar -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item" @click="item">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    items: [
      { title: "Sign out", icon: "mdi-logout" },
      { title: "Login", icon: "mdi-login" }
    ]
  })
};
</script>
