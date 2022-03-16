<template>
  <header>
    <router-link :to="{ name: 'Home' }" title="home">
      <div class="headerArt" />
    </router-link>
  </header>
</template>

<script setup>
</script>

<style lang="scss">
  header {
    //
  }
  .headerArt {
    background-image: url(../assets/img/headerC.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 32.5%; // 3:1

    @include breakpoint($SmMdLg) {
      background-image: url(../assets/img/header_mobile.svg);
      background-size: cover;
      // background-size: 85% 76%;
      margin-top: -4em;
      margin-bottom: 4em;
      padding-bottom: 57%;
    }

    @include breakpoint($SmMd) {
      background-image: url(../assets/img/header_mobile.svg);
      background-size: cover;
      // background-size: 85% 76%;
      margin-top: -3em;
      margin-bottom: 4em;
      padding-bottom: 57%;
    }

    @include breakpoint($sm) {
      background-image: url(../assets/img/header_mobile.svg);
      background-size: cover;
      // background-size: 85% 76%;
      margin-top: -2em;
      margin-bottom: 3em;
      padding-bottom: 57%;
    }
  }

  [data-theme="dark"] .headerArt {
    background-image: url(../assets/img/headerC_w.svg);

    @include breakpoint($SmMdLg) {
      background-image: url(../assets/img/header_mobile_w.svg);
    }
  }
</style>
