<template>
  <header class="header">
    <h1 class="title">CGA Handbook</h1>
    <div v-if="!checkLogin">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <button @click="toggleLogin">Login</button>
        </li>
        <li>
          <a href="https://portal.cganet.com/Publication/index.aspx">Publications</a>
        </li>
      </ul>
    </div>
    <div v-else>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/monographs/create">Create New Monograph</nuxt-link>
        </li>
        <li>
          <button @click="toggleLogin">Log off</button>
        </li>
        <li>
          <a href="https://portal.cganet.com/Publication/index.aspx">Publications</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
//import { mapMutations } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    toggleLogin() {
      this.$store.commit("auth/toggleLogin");
    }
  },
  computed: {
    checkLogin() {
      return this.$store.state.auth.login;
    }
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}
.header.title {
  font-size: 3rem;
  color: #526488;
}
.header ul {
  display: flex;
}
.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
button {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
</style>