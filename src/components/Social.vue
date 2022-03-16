<template>
  <div class="socialIconsBox">
    <a
      class="socialIcon facebook"
      href="http://www.facebook.com/ValentinaRamosArt"
      target="_blank"
    />
    <a
      class="socialIcon instagram"
      href="https://www.instagram.com/valentinadesign/"
      target="_blank"
    />
    <a
      class="socialIcon flickr"
      href="http://www.flickr.com/photos/valentinadesign/"
      target="_blank"
    />
    <a class="socialIcon pinterest" href="http://pinterest.com/valentinaharper/" target="_blank" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  // @import 'assets/css/base';

  .socialIconsBox {
    display: flex;
    float: right;
    flex-direction: column;
    margin-left: 1rem;
    width: 40px;

    a.socialIcon {
      width: 40px;
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0;
      margin-bottom: 0.5em;
      border-bottom: none;

      &.facebook {
        background-image: url("../assets/img/icons/facebook.svg");

        &:hover {
          background-image: url("../assets/img/icons/facebook_hv.svg");
        }
      }

      &.instagram {
        background-image: url("../assets/img/icons/instagram.svg");

        &:hover {
          background-image: url("../assets/img/icons/instagram_hv.svg");
        }
      }

      &.flickr {
        background-image: url("../assets/img/icons/flickr.svg");

        &:hover {
          background-image: url("../assets/img/icons/flickr_hv.svg");
        }
      }

      &.pinterest {
        background-image: url("../assets/img/icons/pinterest.svg");

        &:hover {
          background-image: url("../assets/img/icons/pinterest_hv.svg");
        }
      }
    }
  }
</style>
