<template>
  <div id="app" class="fluid-container">
    <h1 class="title has-text-centered">Search Restaurants</h1>
    <div v-if="showHint">
      <div class="notification is-light is-half has-text-centered">
        Try searching for "western" or "ramen" for example
        <button
          class="delete"
          @click="showHint = false"
        ></button>
      </div>
    </div>
    <div class="columns is-variable is-0-mobile is-centered">
      <div class="column is-half">
        <SearchContainer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      showHint: true
    };
  },
  components: {
    SearchItem: require("./components/SearchItem.vue").default,
    SearchContainer: require("./components/SearchContainer.vue").default
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
