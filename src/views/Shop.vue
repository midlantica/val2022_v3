<template>
  <main>
    <section>
      <a href="http://www.valentinaharper.com/" target="_blank">
        <img src="../assets/img/shop/prints.jpg" alt="Prints" />
        <p>Prints</p>
      </a>
      <a href="https://society6.com/valentinaramos" target="_blank">
        <img src="../assets/img/shop/duvet.jpg" alt="Home Decor" />
        <p>Home Decor</p>
      </a>
      <a href="https://www.teepublic.com/user/valentina-harper" target="_blank">
        <img src="../assets/img/shop/tshirt.png" alt="T-Shirts" />
        <p>T-Shirts</p>
      </a>
      <a
        href="http://www.amazon.com/Valentina-Harper/e/B00MCMCYIA/ref=sr_ntt_srch_lnk_1?qid=1430838770&sr=8-1"
        target="_blank"
      >
        <img src="../assets/img/shop/books.jpg" alt="Books" />
        <p>Books</p>
      </a>
      <a href="http://www.spoonflower.com/profiles/valentinaharper" target="_blank">
        <img src="../assets/img/shop/fabric.jpg" alt="Fabrics" />
        <p>Fabrics</p>
      </a>
      <a href="http://www.mywonderfulwalls.com/collections/valentina-harper" target="_blank">
        <img src="../assets/img/shop/mural.jpg" alt="Wall Decal" />
        <p>Wall Decal</p>
      </a>
    </section>
    <aside>
      <Social />
    </aside>
  </main>
</template>

<script setup>
  import Social from "../components/Social.vue"
</script>

<style lang='scss' scoped>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: flex-start;

    a {
      flex-basis: 30%;
      background: $beige;
      margin-bottom: 1em;
      border-radius: 2px;
      border: 1px solid $greyLightest;
      border-radius: 0.5rem;
      border-radius: 0.5rem;

      @include breakpoint($SmMdLg) {
        flex-basis: 40%;
      }

      @include breakpoint($SmMd) {
        flex-basis: 90%;
      }

      img {
        width: 100%;
        height: calc(100% - 2.5rem);
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
      p {
        color: $black;
        margin: 0.5em auto;
        font-size: 0.85em;
        text-align: center;
      }
    }
  }
</style>
