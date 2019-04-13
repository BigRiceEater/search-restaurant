<template lang="pug">
  article.media.box
    figure.media-left
      img.search-thumbnail(:src="mediaUrl")
    .media-content.has-text-light
      .content
        .title.is-4  {{ title }}
        .subtitle.is-5 {{ description }}
        .tags
          .tag.is-small.is-primary(v-for="tag in tags") {{tag}}

</template>

<script>
import { pathOr } from "ramda";

export default {
  props: {
    data: Object
  },
  methods: {
    getValueFromData(defaultValue, path) {
      const f = pathOr(defaultValue, path);
      return f(this.data);
    }
  },
  computed: {
    title() {
      return this.getValueFromData("My Shop", ["title"]);
    },
    mediaUrl() {
      return this.getValueFromData("https://via.placeholder.com/150", [
        "imageUrl"
      ]);
    },
    description() {
      return this.getValueFromData("Shop Description", ["description"]);
    },
    tags() {
      return this.getValueFromData([], ["tags"]);
    }
  }
};
</script>

<style scoped>
.search-thumbnail {
  width: 100px;
  height: 80px;
  object-fit: cover;
}

.media-content {
  overflow: hidden;
}
</style>
