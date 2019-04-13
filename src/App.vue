<template>
  <div id="app">
    <div class="container">
      <div class="columns is-centered">
        <h1 class="column title is-half has-text-centered">Search Restaurants</h1>
      </div>
      <div v-if="showHint" class="columns is-centered">
        <div class="column">
          <div class="notification is-light is-half has-text-centered">
            Try searching for "western" or "ramen" for example
            <button
              class="delete"
              @click="showHint = false"
            ></button>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <SearchContainer class="column is-half"/>
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
  overflow-x: hidden;
}
</style>
