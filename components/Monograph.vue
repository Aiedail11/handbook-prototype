<template>
  <div class="monograph" v-if="verifySymbol">
    <nuxt-link :to="'monographs/' + id">
      <div v-for="symbol in symbols" :key="symbol.index">
        <h2>{{symbol.letters}}</h2>
        <h2 v-if="symbol.quantity >1">
          <sub>{{symbol.quantity}}</sub>
        </h2>
      </div>
      <h3>{{name}}</h3>
    </nuxt-link>
    <div v-if="checkLogin">
      <nuxt-link :to="'monographs/edit/' + id">
        <h4>Edit | </h4>
      </nuxt-link>
      <h4 @click="onDelete">Delete</h4>
    </div>
  </div>
</template>

<script>
//import SymbolElement from "../components/SymbolElement";

export default {
  name: "Monograph",

  props: ["symbols", "name", "id"],
  data() {
    return { login: true };
  },
  computed: {
    verifySymbol() {
      if (!Array.isArray(this.symbols)) return false;
      for (let i = 0; i < this.symbols.length; i++) {
        if (this.symbols[i].letters == null) return false;
      }
      return true;
    },
    checkLogin() {
      return this.$store.state.auth.login;
    }
  },
  methods: {
    onDelete() {
      try {
        this.$store.commit("monographs/delete", this.id);
      } catch (e) {
        // console.log("error");
        console.log(e);
      }
    }
  }
};
</script>

<style>
.monograph {
  padding: 1rem;
  margin: 1rem 0;
}

h2,
h4 {
  display: inline;
}
</style>