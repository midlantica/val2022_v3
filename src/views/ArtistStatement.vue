<template>
  <main>
    <section>
      <div class="flexxy">
        <div class="valImgDiv">
          <router-link :to="{ name: 'Home' }" title="home">
            <img class="valPic" src="../assets/img/Valentina_Harper.jpg" />
            <p class="statement">＜ back</p>
          </router-link>
        </div>
        <Statement />
      </div>
    </section>

    <aside>
      <Social />
    </aside>
  </main>
</template>

<script setup>
  import Statement from "../components/Statement.vue"
  import Social from "../components/Social.vue"
</script>

<style lang="scss" scoped>
  a {
    border-bottom: none;
  }

  .statement {
    font-size: 1em;
    text-align: center;
    margin-top: 0.4em;
    font-weight: bold;

    @include breakpoint($mobile) {
      display: block;
      margin-bottom: 0;
    }
  }

  p {
    text-align: center;
  }
</style>
