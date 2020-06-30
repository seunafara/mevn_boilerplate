<template>
  <div class="nav-container">
    <nav>
      <input type="checkbox" id="nav" hidden />
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div class="logo">
        <router-link to="/">MEVN</router-link>
      </div>
      <div class="nav-wrapper">
        <ul>
          <li><router-link to="/">Home</router-link></li>

          <li v-if="!isLoggedIn">
            <router-link to="/login">Login </router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register </router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/profile">Profile </router-link>
          </li>
          <li v-if="isLoggedIn">
            <a @click.prevent="logoutUser" href="">Logout </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout();
    },
  },
};
</script>

<style></style>
