<template>
  <Menu></Menu>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu"
export default {
  name: "App",
  components: {
    Menu: Menu
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
