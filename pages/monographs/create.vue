<template>
  <div class="monograph-creation">
    <form @submit.prevent="onSubmit">
      <!--<form @submit.prevent="onSubmit" > -->
      <!-- Prevent page refresh so you can read console logs -->
      <div class="monograph-name">
        <h2>Name:</h2>
        <input type="text" v-model="monograph.name" />
      </div>
      <div class="monograph-symbol">
        <h2>Chemical Symbol:</h2>
        <input type="text" v-model="symbolText" />
      </div>
      <div class="monograph-synonyms">
        <h2>Synonyms:</h2>
        <input type="text" v-model="monograph.synonyms" />
      </div>
      <div class="monograph-cas-number">
        <h2>CAS Registry Number:</h2>
        <input type="text" v-model="monograph.casRegistryNumber" />
      </div>
      <div class="monograph-dot-shipping-name">
        <h2>DOT Proper Shipping Name:</h2>
        <input type="text" v-model="monograph.dotShippingName" />
      </div>
      <div class="monograph-dot-hazard-class">
        <h2>DOT Hazard Class:</h2>
        <input type="text" v-model="monograph.dotHazardClass" />
      </div>
      <div class="monograph-dot-label">
        <h2>DOT Label:</h2>
        <input type="text" v-model="monograph.dotLabel" />
      </div>
      <div class="tc-shipping-name">
        <h2>TC_Shipping Name:</h2>
        <input type="text" v-model="monograph.tcShippingName" />
      </div>
      <div class="tc-classification">
        <h2>TC Classification:</h2>
        <input type="text" v-model="monograph.tcClassification" />
      </div>
      <div class="tc-label">
        <h2>TC Label:</h2>
        <input type="text" v-model="monograph.tcLabel" />
      </div>
      <div class="un-number">
        <h2>UN Number:</h2>
        <input type="text" v-model="monograph.unNumber" />
      </div>
      <input type="submit" value="Submit"  @submit.prevent="onSubmit" />
    </form>
  </div>
</template>

<script>
// This seems to reset the store on submit, and I don't understand why (notice how submitting logs you out)
// Maybe https://vuex.vuejs.org/guide/modules.html#module-local-state will help

export default {
  data() {
    return {
      monograph: {
        symbols: "",
        name: "",
        synonyms: "",
        casRegistryNumber: "",
        dotHazardClass: "",
        dotShippingName: "",
        dotLabel: "",
        tcShippingName: "",
        tcClassification: "",
        tcLabel: "",
        unNumber: "",
        miscProperties: []
      },
      symbolText: ""
    };
  },
  methods: {
    onSubmit() {
      this.monograph.symbols = [{ letters: this.symbolText, quantity: 1 }];
      //console.log("clicked submit");
      try {
        this.$store.commit("monographs/create", this.monograph);
      } catch (e) {
       // console.log("error");
        console.log(e);
      }
      //console.log(this.$store.state.monographs.list);
      this.$router.push({name: 'index'});
    }
  }
};
</script>

<style>
</style>