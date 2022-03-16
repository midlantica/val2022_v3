<template>
  <main>
    <section>
      <h2>Patterns Gallery</h2>
      <p class="marT0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae libero magni incidunt nemo distinctio aliquam vero eveniet culpa repellendus, ratione nesciunt ullam. Tempore neque voluptates doloribus. Sed, ipsa a!
      </p>
      <p>
        If you are you interested in licensing my artwork or collaborating to create a custom
        design, email me at
        <a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a>
      </p>

      <ImageBox image-list-class="reddy" :images="images" />
    </section>

    <aside>
      <Social />
    </aside>
  </main>
</template>

<script setup>
  import Social from "../components/Social.vue"
  import ImageBox from "vue3-image-box"

  const images = [
    {
      thumb: "assets/patterns/07_sm.jpg",
      src: "assets/patterns/07.jpg",
      caption: "07",
    },
    {
      thumb: "assets/patterns/amelia_sm.jpg",
      src: "assets/patterns/amelia.jpg",
      caption: "Amelia",
    },
    {
      thumb: "assets/patterns/baby_dino_sm.jpg",
      src: "assets/patterns/baby_dino.jpg",
      caption: "Baby_dino",
    },
    {
      thumb: "assets/patterns/be_my_valentine_sm.jpg",
      src: "assets/patterns/be_my_valentine.jpg",
      caption: "Be_my_valentine",
    },
    {
      thumb: "assets/patterns/beatriz_sm.jpg",
      src: "assets/patterns/beatriz.jpg",
      caption: "Beatriz",
    },
    {
      thumb: "assets/patterns/birds_and_flowers_sm.jpg",
      src: "assets/patterns/birds_and_flowers.jpg",
      caption: "Birds_and_flowers",
    },
    {
      thumb: "assets/patterns/birds_in_the_garden_sm.jpg",
      src: "assets/patterns/birds_in_the_garden.jpg",
      caption: "Birds_in_the_garden",
    },
    {
      thumb: "assets/patterns/birds-with-flowers_sm.jpg",
      src: "assets/patterns/birds-with-flowers.jpg",
      caption: "birds-with-Flowers",
    },
    {
      thumb: "assets/patterns/blooming_sm.jpg",
      src: "assets/patterns/blooming.jpg",
      caption: "Blooming",
    },
    {
      thumb: "assets/patterns/boho_flowers_sm.jpg",
      src: "assets/patterns/boho_flowers.jpg",
      caption: "Boho_flowers",
    },
    {
      thumb: "assets/patterns/butterflies_sm.jpg",
      src: "assets/patterns/butterflies.jpg",
      caption: "Butterflies",
    },
    {
      thumb: "assets/patterns/candy_flowers_sm.jpg",
      src: "assets/patterns/candy_flowers.jpg",
      caption: "Candy_flowers",
    },
    {
      thumb: "assets/patterns/cayenas_sm.jpg",
      src: "assets/patterns/cayenas.jpg",
      caption: "Cayenas",
    },
    {
      thumb: "assets/patterns/cute_little_owls_sm.jpg",
      src: "assets/patterns/cute_little_owls.jpg",
      caption: "Cute_little_owls",
    },
    {
      thumb: "assets/patterns/dahlias_sm.jpg",
      src: "assets/patterns/dahlias.jpg",
      caption: "Dahlias",
    },
    {
      thumb: "assets/patterns/doodles_black_and_yellow_sm.jpg",
      src: "assets/patterns/doodles_black_and_yellow.jpg",
      caption: "Doodles_black_and_yellow",
    },
    {
      thumb: "assets/patterns/doodles_garden_sm.jpg",
      src: "assets/patterns/doodles_garden.jpg",
      caption: "Doodles_garden",
    },
    {
      thumb: "assets/patterns/eli_sm.jpg",
      src: "assets/patterns/eli.jpg",
      caption: "Eli",
    },
    {
      thumb: "assets/patterns/ethnic_stripes_sm.jpg",
      src: "assets/patterns/ethnic_stripes.jpg",
      caption: "Ethnic_stripes",
    },
    {
      thumb: "assets/patterns/flowers_doodles_sm.jpg",
      src: "assets/patterns/flowers_doodles.jpg",
      caption: "Flowers_doodles",
    },
    {
      thumb: "assets/patterns/flowers_in_brown_sm.jpg",
      src: "assets/patterns/flowers_in_brown.jpg",
      caption: "Flowers_in_brown",
    },
    {
      thumb: "assets/patterns/flowers_pattern_sm.jpg",
      src: "assets/patterns/flowers_pattern.jpg",
      caption: "Flowers pattern",
    },
    {
      thumb: "assets/patterns/folkbirds_sm.jpg",
      src: "assets/patterns/folkbirds.jpg",
      caption: "Folkbirds",
    },
    {
      thumb: "assets/patterns/i_spy_sm.jpg",
      src: "assets/patterns/i_spy.jpg",
      caption: "I spy",
    },
    {
      thumb: "assets/patterns/lets_cook_sm.jpg",
      src: "assets/patterns/lets_cook.jpg",
      caption: "Lets cook",
    },
    {
      thumb: "assets/patterns/lila_sm.jpg",
      src: "assets/patterns/lila.jpg",
      caption: "Lila",
    },
    {
      thumb: "assets/patterns/lita_sm.jpg",
      src: "assets/patterns/lita.jpg",
      caption: "Lita",
    },
    {
      thumb: "assets/patterns/little_birds_sm.jpg",
      src: "assets/patterns/little_birds.jpg",
      caption: "Little Birds",
    },
    {
      thumb: "assets/patterns/love_live_laugh_sm.jpg",
      src: "assets/patterns/love_live_laugh.jpg",
      caption: "Love Live Laugh",
    },
    {
      thumb: "assets/patterns/lovely_birds_sm.jpg",
      src: "assets/patterns/lovely_birds.jpg",
      caption: "Lovely Birds",
    },
    {
      thumb: "assets/patterns/marching_elephants_sm.jpg",
      src: "assets/patterns/marching_elephants.jpg",
      caption: "Marching Elephants",
    },
    {
      thumb: "assets/patterns/marisa_sm.jpg",
      src: "assets/patterns/marisa.jpg",
      caption: "Marisa",
    },
    {
      thumb: "assets/patterns/orange_flowers_sm.jpg",
      src: "assets/patterns/orange_flowers.jpg",
      caption: "Orange Flowers",
    },
    {
      thumb: "assets/patterns/orange_grey_flowers_sm.jpg",
      src: "assets/patterns/orange_grey_flowers.jpg",
      caption: "Orange Grey Flowers",
    },
    {
      thumb: "assets/patterns/owls_sm.jpg",
      src: "assets/patterns/owls.jpg",
      caption: "Owls",
    },
    {
      thumb: "assets/patterns/pods_and_flowers_sm.jpg",
      src: "assets/patterns/pods_and_flowers.jpg",
      caption: "Pods and Flowers",
    },
    {
      thumb: "assets/patterns/pods_sm.jpg",
      src: "assets/patterns/pods.jpg",
      caption: "Pods",
    },
    {
      thumb: "assets/patterns/rachel_sm.jpg",
      src: "assets/patterns/rachel.jpg",
      caption: "Rachel",
    },
    {
      thumb: "assets/patterns/random_flowers_sm.jpg",
      src: "assets/patterns/random_flowers.jpg",
      caption: "Random Flowers",
    },
    {
      thumb: "assets/patterns/retro_coffee_sm.jpg",
      src: "assets/patterns/retro_coffee.jpg",
      caption: "Retro Coffee",
    },
    {
      thumb: "assets/patterns/retro_sm.jpg",
      src: "assets/patterns/retro.jpg",
      caption: "Retro",
    },
    {
      thumb: "assets/patterns/reverie_sm.jpg",
      src: "assets/patterns/reverie.jpg",
      caption: "Reverie",
    },
    {
      thumb: "assets/patterns/sofia_sm.jpg",
      src: "assets/patterns/sofia.jpg",
      caption: "Sofia",
    },
    {
      thumb: "assets/patterns/spring_paisley_sm.jpg",
      src: "assets/patterns/spring_paisley.jpg",
      caption: "Spring Paisley",
    },
    {
      thumb: "assets/patterns/stella_sm.jpg",
      src: "assets/patterns/stella.jpg",
      caption: "Stella",
    },
    {
      thumb: "assets/patterns/under_the_sea_sm.jpg",
      src: "assets/patterns/under_the_sea.jpg",
      caption: "Under the Sea",
    },
    {
      thumb: "assets/patterns/valentines_birds_sm.jpg",
      src: "assets/patterns/valentines_birds.jpg",
      caption: "Valentine's bird",
    },
  ]

</script>

<style lang="scss">
  @import "../assets/css/vendor/vue-lightbox";

  .gallery section > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
    gap: 1rem;
    cursor: pointer;
    // background: red !important;

    @include breakpoint($SmMdLg) {
      // background: red;
    }

    @include breakpoint($SmMd) {
      // background: green;
    }

    @include breakpoint($mdlg) {
      // background: purple;
    }

    @include breakpoint($sm) {
      text-align: center;
      // background: blue;
    }

    img {
      // border: 1px solid hsl(42, 12%, 84%);
      margin-bottom: -4px;
      border-radius: 0.5rem;
    }
  }
</style>
