<template>
  <form @submit.prevent="onSubmit">
      <p
        class="search-description"
      >Search Compressed Gases: Properties, Manufacture, Uses, and Special Requirements for Safe Handling</p>
      <input type="text" v-model="text" placeholder="Enter search terms..." />

      <input type="submit" value="Search" />
  </form>
</template>

<script>
export default {
  name: "SearchGases",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    }
  }
};
</script>

<style>

p.search-description {
  color: #2073ba;
}

.jumbotron {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    color: inherit;
    background-color: #eeeeee;
}

.container .jumbotron, .container-fluid .jumbotron {
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 6px;
}

.jumbotron p {
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 200;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>