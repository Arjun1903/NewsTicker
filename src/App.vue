    
<template>
  <v-app>
    <burger />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import burger from "./components/burger";
export default {
  components: { burger },
  name: "App",
  data() {
    return {};
  }
};
</script>