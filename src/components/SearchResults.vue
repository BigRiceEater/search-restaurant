<template lang="pug">
div
  .search-results(v-if="results.length > 0")
    p.has-text-centered results found : {{results.length}} 
      br
    SearchItem(v-for="item in results" :key="item.id" :data="item")
  
  .no-results(v-if="showNoResultHint")
    p.has-text-centered no results from search term
</template>

<script>
export default {
  props: {
    results: Array,
    showNoResultHint: Boolean
  },
  components: {
    SearchItem: require("./SearchItem.vue").default
  }
};
</script>

<style scoped>
.search-results {
  padding: 10px;
}
</style>


