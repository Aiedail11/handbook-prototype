<template>
  <div class="container body-content">
    <div class="jumbotron">
      <div style="display: flex; justify-content:center;">
        <h1 class="lead site-name">CGA Handbook</h1>
      </div>
      <SearchGases v-on:search-text="searchText" />
    </div>
    <div class="search-list">
      <Monograph
        v-for="monograph in monographs"
        :key="monograph.id"
        :id="monograph.id"
        :symbols="monograph.symbols"
        :name="monograph.name"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Monograph from "../components/Monograph";
import SearchGases from "../components/SearchGases";
//import SymbolElement from "../components/SymbolElement.vue";
//import MonoAPI from "../services/monoAPI"


export default {
  components: {
    Monograph,
    SearchGases
  },/*
  data() {
    return {
      monographs: this.$store.state.monographs.list
    };
  },*/
  async created() {},
  head() {
    return {
      title: "CGA Handbook",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Resource for Compressed Gases: Properties, Manufacture," +
            " Uses, and Special Requirements for Handling"
        }
      ]
    };
  },
  methods: {
    async searchText(text) {
      console.log("You tried to search for: " + text);
    }
  },
  computed: {
    monographs(){
      return this.$store.state.monographs.list;
    }
  }
};
</script>

<style>
.search-list {
  display: table;
}

.container .jumbotron,
.container-fluid .jumbotron {
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 6px;
}

a {
  color: #337ab7;
  text-decoration: none;
}
h1.site-name {
  color: #003066;
}

.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
</style>