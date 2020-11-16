<template>
  <nuxt-link :to="'monographs/' + id">
    <div class="monograph">
      <h2>{{symbol}}</h2>
      <h3>{{name}}</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Monograph",
  props: ["symbol", "name", "id"]
};
</script>

<style>

.monograph {
  padding: 1rem;
  margin: 1rem 0;
}
</style>