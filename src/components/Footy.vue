<template>
  <footer>
    <p>Copyright 2008 &ndash; {{ year }}</p>
    <div class="footerArt" />
  </footer>
</template>

<script setup>
  import moment from "moment"

  let year = moment().format("YYYY")
</script>

<style lang="scss">
  @import '../assets/css/_base.scss';

  footer {
    // grid-row: 4;
  }

  .footerArt {
    // width: 100%;
    // height: 383px;
    background-image: url(../assets/img/footer.svg);
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-position-y: 0.7em;
    padding: 0;
    margin-bottom: -10px;
    padding-bottom: 25%;

    // @include breakpoint($mobile) {
    //   // background-image: url(../assets/img/footer.svg);
    //   background-size: contain;
    //   background-repeat: no-repeat;
    //   background-size: 100% 100%;
    //   height: 0;
    //   padding: 0; // reset
    //   padding-bottom: 33%;
    //   // margin-top: 1.3em;
    //   background-position-y: 1.4em;
    // }
  }

  footer p {
    // margin-bottom: -4em;
    position: relative;
    font-size: 0.6em;
    text-align: center;
    margin-bottom: -2em;

    @include breakpoint($SmMdLg) {
      position: relative;
      display: block;
    }
  }
</style>
