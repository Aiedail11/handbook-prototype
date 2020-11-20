<template>
  <div class="monograph-properties-container">
    <div class="monograph-name">
      <h3>Name: {{monograph.name.toUpperCase()}}</h3>
    </div>
    <div class="monograph-symbol">
      <h3>Chemical Symbol:</h3>
      <h3 v-for="symbol in monograph.symbols" :key="symbol.index">
        {{symbol.letters}}
        <sub v-if="symbol.quantity > 1">{{symbol.quantity}}</sub>
      </h3>
    </div>
    <div class="monograph-synonyms">
      <h3>Synonyms: {{stringify(monograph.synonyms)}}</h3>
    </div>
    <div class="monograph-cas-number">
      <h3>CAS Registry Number: {{monograph.casRegistryNumber}}</h3>
    </div>
    <div class="monograph-dot-shipping-name">
      <h3>DOT Proper Shipping Name: {{monograph.dotShippingName}}</h3>
    </div>
    <div class="monograph-dot-hazard-class">
      <h3>DOT Hazard Class: {{monograph.dotHazardClass}}</h3>
    </div>
    <div class="monograph-dot-label">
      <h3>DOT Label: {{monograph.Label}}</h3>
    </div>
    <div class="tc-shipping-name">
      <h3>TC_Shipping Name: {{monograph.tcShippingName}}</h3>
    </div>
    <div class="tc-classification">
      <h3>TC Classification: {{monograph.tcClassification}}</h3>
    </div>
    <div class="tc-label">
      <h3>TC Label: {{monograph.tcLabel}}</h3>
    </div>
    <div class="un-number">
      <h3>UN Number: {{monograph.unNumber}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monograph: this.$store.state.monographs.list.filter(
        (value, index, arr) => {
          return value.id == this.$route.params.id;
        }
      )[0]
    };
  },
  methods: {
    stringify(list) {
      if (!Array.isArray(list)) return list;
      let result = "";
      for (let i = 0; i < list.length; i++) {
        if (i < list.length - 1) result += list[i] + ", ";
        else result += list[i];
      }
      return result;
    }
  }
};
</script>

<style>
h2,
h3 {
  display: inline;
}
</style>