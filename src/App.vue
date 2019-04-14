<template>
  <div id="app" class="fluid-container">
    <transition name="fade">
      <div class="hint-helper" v-if="showHint">
        <div class="notification is-primary is-half has-text-centered">
          Try searching for "western" or "ramen" for example
          <button
            class="delete"
            @click="showHint = false"
          ></button>
        </div>
      </div>
    </transition>

    <h1 class="title has-text-centered">Search Restaurants</h1>

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
  },
  mounted() {
    const timeoutMilli = 10000;
    setTimeout(() => (this.showHint = false), timeoutMilli);
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

.hint-helper {
  position: fixed; /* relative to the html element always */
  bottom: 0px;
}

.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
