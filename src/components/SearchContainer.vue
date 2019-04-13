<template lang="pug">
  div.search-container
    SearchInputBox(@valueChanged="handleSearchValue")
    SearchResults(:results="searchResults" :showNoResultHint="showNoResultHint")
</template>

<script>
import Card from "@/modules/models/card.js";
import RestaurantSearchIndex from "@/modules/search-index";
import axios from "axios";
import SearchItemVue from "./SearchItem.vue";

export default {
  data() {
    return {
      api:
        "https://my-json-server.typicode.com/bigriceeater/food-restaurant-data/restaurants",
      cards: [],
      searchResults: [],
      showNoResultHint: false,
      index: null
    };
  },
  methods: {
    handleSearchValue(searchTerm) {
      this.searchResults = [];
      if (searchTerm) {
        const searchResults = this.index.search(searchTerm.trim());
        searchResults.forEach(r => this.addToResults(r));
        this.showNoResultHint = searchResults.length < 1;
      } else this.showNoResultHint = false;
    },
    addToResults(result) {
      const shop = this.cards.find(c => c.id === result.ref);
      this.searchResults.push(shop);
    },
    addNewRestaurantCard(restaurant) {
      const card = new Card({
        id: restaurant.id,
        title: restaurant.title,
        imageUrl: restaurant.imageUrl,
        description: restaurant.description,
        tags: restaurant.tags
      });
      this.cards.push(card);
    }
  },
  created() {
    axios
      .get(this.api)
      .then(({ data }) => data.forEach(r => this.addNewRestaurantCard(r)))
      .then(
        () => (this.index = new RestaurantSearchIndex(this.cards).getIndex())
      );
  },
  components: {
    SearchInputBox: require("./SearchInputBox.vue").default,
    SearchResults: require("./SearchResults.vue").default
  }
};
</script>

<style scoped>
</style>

