<template>
  <div class="wrapper">
    <DarkModeToggler class="darkMode" />
    <HeaderTop />
    <Navvy />
    <router-view />
    <Footy />
  </div>
</template>

<script setup>
import HeaderTop from "./components/HeaderTop.vue";
import Navvy from "./components/Navvy.vue";
import Footy from "./components/Footy.vue";
import DarkModeToggler from "./components/darkMode/DarkModeToggler.vue";
</script>

<style lang="sass">
  //@import "./assets/css/main.scss"
</style>
