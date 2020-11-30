<template>
  <div class="monograph-edit">
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
import { mapGetters } from "vuex";

export default {
  computed: {
    monograph() {
      let monograph = this.getById(this.$route.params.id)
      if(monograph == null){
        console.log('redirect here');
        this.$router.push({name: 'index'});
        return {};
      }
      return monograph;
    },
    ...mapGetters({
      getById: "monographs/getMonographById"
    })
  },
  methods: {
    onSubmit() {
      try {
        this.$store.commit("monographs/update", this.monograph);
      } catch (e) {
       // console.log("error");
        console.log(e);
      }
      this.$router.push({name: 'index'});
    }
  }
};
</script>

<style>
</style>