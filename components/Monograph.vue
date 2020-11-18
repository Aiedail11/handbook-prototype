<template>
  <nuxt-link :to="'monographs/' + id">
    <div class="monograph">
      <div v-for="symbol in symbols" :key="symbol.index">
        <h2>{{symbol.letters}}</h2><h2 v-if="symbol.quantity >1"><sub>{{symbol.quantity}}</sub></h2>
      </div>
      <h3>{{name}}</h3>
    </div>
  </nuxt-link>
</template>

<script>
//import SymbolElement from "../components/SymbolElement";

export default {
  name: "Monograph",

  props: ["symbols", "name", "id"],
  computed: {
    verifySymbol() {
      //console.log("symbols: " + this.symbols);
      return true;
    }
  }
};
</script>

<style>
.monograph {
  padding: 1rem;
  margin: 1rem 0;
}

h2 {
  display: inline;
}
</style>