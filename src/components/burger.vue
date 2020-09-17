<template>
  <nav>
    <v-toolbar flat app class="orange">
      <v-toolbar-side-icon @click="drawer = !drawer" class="black--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase black--text">
        <span>NEWS TICKER</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-tile v-for="page in pages" :key="page.text" router :to="page.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ page.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{page.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      pages: [
        { icon: "home", text: "HOME", route: "/" },
        { icon: "business", text: "CHANNELSELECTION", route: "/Channelselection"},
        { icon: "category", text: "CATEGORIES", route: "/categories" },
        { icon: "info", text: "ABOUT", route: "/About" }
      ]
    };
  }
};
</script>

<style>
</style>