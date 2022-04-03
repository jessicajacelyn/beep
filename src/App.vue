<template>
  <Navbar />
  <Reward />
  <router-view class="container" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Reward from "./components/Reward.vue";

export default {
  name: "App",
  components: {
    // Sidebar,
    Navbar,
    Reward,
  },
};
</script>

<style>
/* Unscoped styles that applies to the entire application */

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

/*
  Color input pink if it is invalid --> e.g. when telephone number does not match the specified pattern
  Will only activate if the placeholder is not currently being shown, meaning will not show before user type anything
*/
input:not(:placeholder-shown):invalid {
  background-color: lightpink;
}
</style>
