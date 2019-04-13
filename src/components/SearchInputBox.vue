<template lang="pug">
  .search-input-box
    input.input(v-model="value")
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value: function() {
      this.$emit("valueChanged", this.value);
    }
  }
};
</script>

<style scoped>
.search-input-box {
  padding: 10px;
}
</style>

