<template>
  <div class="valImgDiv">
    <router-link :to="{ name: 'ArtistStatement' }">
      <img class="valPic" src="../assets/img/Valentina_Harper.jpg" />
      <p class="statement">See Artist's Statement</p>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  a {
    border-bottom: none;
    @include clearfix;
  }

  .statement {
    font-size: 1em;
    text-align: center;
    margin-top: 0.4em;
    font-weight: bold;
    flex-shrink: 1;

    @include breakpoint($mobile) {
      display: block;
      margin-bottom: 0;
    }
  }
</style>
