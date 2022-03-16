<template>
  <main>
    <section>
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
      thumb: "assets/portfolio/aaron_sm.jpg",
      src: "assets/portfolio/aaron.jpg",
      caption: "Aaron",
    },
    {
      thumb: "assets/portfolio/today_is_going_to_be_awesome_sm.jpg",
      src: "assets/portfolio/today_is_going_to_be_awesome.jpg",
      caption: "Today Is Going To Be Awesome",
    },
    {
      thumb: "assets/portfolio/pins_sm.jpg",
      src: "assets/portfolio/pins.jpg",
      caption: "Pins",
    },
    {
      thumb: "assets/portfolio/arabella_sm.jpg",
      src: "assets/portfolio/arabella.jpg",
      caption: "Arabella",
    },
    {
      thumb: "assets/portfolio/sugar_skull_sm.jpg",
      src: "assets/portfolio/sugar_skull.jpg",
      caption: "Sugar Skull",
    },
    {
      thumb: "assets/portfolio/tennessee_sm.jpg",
      src: "assets/portfolio/tennessee.jpg",
      caption: "Tennessee",
    },
    {
      thumb: "assets/portfolio/backpack_sm.jpg",
      src: "assets/portfolio/backpack.jpg",
      caption: "Backpack",
    },
    {
      thumb: "assets/portfolio/beer_glass_sm.jpg",
      src: "assets/portfolio/beer_glass.jpg",
      caption: "Beer Glass",
    },
    {
      thumb: "assets/portfolio/bags_sm.jpg",
      src: "assets/portfolio/bags.jpg",
      caption: "Bags",
    },
    {
      thumb: "assets/portfolio/bee_awesome_sm.jpg",
      src: "assets/portfolio/bee_awesome.jpg",
      caption: "Bee Awesome",
    },
    {
      thumb: "assets/portfolio/box_sm.jpg",
      src: "assets/portfolio/box.jpg",
      caption: "Box",
    },
    {
      thumb: "assets/portfolio/calendar_sm.jpg",
      src: "assets/portfolio/calendar.jpg",
      caption: "Calendar",
    },
    {
      thumb: "assets/portfolio/candle_valentina_sm.jpg",
      src: "assets/portfolio/candle_valentina.jpg",
      caption: "Candle Valentina",
    },
    {
      thumb: "assets/portfolio/coin_bag_sm.jpg",
      src: "assets/portfolio/coin_bag.jpg",
      caption: "Coin Bag",
    },
    {
      thumb: "assets/portfolio/coloring_book_sm.jpg",
      src: "assets/portfolio/coloring_book.jpg",
      caption: "Coloring Book",
    },
    {
      thumb: "assets/portfolio/conexion_americas_mural_sm.jpg",
      src: "assets/portfolio/conexion_americas_mural.jpg",
      caption: "Conexion Americas Mural",
    },
    {
      thumb: "assets/portfolio/decal_sm.jpg",
      src: "assets/portfolio/decal.jpg",
      caption: "Decal",
    },
    {
      thumb: "assets/portfolio/el_mago_sm.jpg",
      src: "assets/portfolio/el_mago.jpg",
      caption: "El Mago",
    },
    {
      thumb: "assets/portfolio/eva_sm.jpg",
      src: "assets/portfolio/eva.jpg",
      caption: "Eva",
    },
    {
      thumb: "assets/portfolio/flowers_mural_sm.jpg",
      src: "assets/portfolio/flowers_mural.jpg",
      caption: "Flowers Mural",
    },
    {
      thumb: "assets/portfolio/flying_mural_sm.jpg",
      src: "assets/portfolio/flying_mural.jpg",
      caption: "Flying Mural",
    },
    {
      thumb: "assets/portfolio/flying_mural_details_sm.jpg",
      src: "assets/portfolio/flying_mural_details.jpg",
      caption: "Flying Mural Details",
    },
    {
      thumb: "assets/portfolio/german_shepherd_sm.jpg",
      src: "assets/portfolio/german_shepherd.jpg",
      caption: "German Shepherd",
    },
    {
      thumb: "assets/portfolio/guitar_01_sm.jpg",
      src: "assets/portfolio/guitar_01.jpg",
      caption: "Guitar 01",
    },
    {
      thumb: "assets/portfolio/guitar_02_sm.jpg",
      src: "assets/portfolio/guitar_02.jpg",
      caption: "Guitar 02",
    },
    {
      thumb: "assets/portfolio/helios_sm.jpg",
      src: "assets/portfolio/helios.jpg",
      caption: "Helios",
    },
    {
      thumb: "assets/portfolio/hello_person_sm.jpg",
      src: "assets/portfolio/hello_person.jpg",
      caption: "Hello Person",
    },
    {
      thumb: "assets/portfolio/lets_do_this_sm.jpg",
      src: "assets/portfolio/lets_do_this.jpg",
      caption: "Lets Do This",
    },
    {
      thumb: "assets/portfolio/little_deer_flowers_sm.jpg",
      src: "assets/portfolio/little_deer_flowers.jpg",
      caption: "Little Deer Flowers",
    },
    {
      thumb: "assets/portfolio/little_planter_sm.jpg",
      src: "assets/portfolio/little_planter.jpg",
      caption: "Little Planter",
    },
    {
      thumb: "assets/portfolio/magdalena_sm.jpg",
      src: "assets/portfolio/magdalena.jpg",
      caption: "Magdalena",
    },
    {
      thumb: "assets/portfolio/maya_quotes_sm.jpg",
      src: "assets/portfolio/maya_quotes.jpg",
      caption: "Maya Quotes",
    },
    {
      thumb: "assets/portfolio/mug_sm.jpg",
      src: "assets/portfolio/mug.jpg",
      caption: "Mug",
    },
    {
      thumb: "assets/portfolio/nativity_sm.jpg",
      src: "assets/portfolio/nativity.jpg",
      caption: "Nativity",
    },
    {
      thumb: "assets/portfolio/notebooks_sm.jpg",
      src: "assets/portfolio/notebooks.jpg",
      caption: "Notebooks",
    },
    {
      thumb: "assets/portfolio/octopus_bloom_sm.jpg",
      src: "assets/portfolio/octopus_bloom.jpg",
      caption: "Octopus Bloom",
    },
    {
      thumb: "assets/portfolio/pereza_sm.jpg",
      src: "assets/portfolio/pereza.jpg",
      caption: "Pereza",
    },
    {
      thumb: "assets/portfolio/pete_sm.jpg",
      src: "assets/portfolio/pete.jpg",
      caption: "Pete",
    },
    {
      thumb: "assets/portfolio/phone_case_sm.jpg",
      src: "assets/portfolio/phone_case.jpg",
      caption: "Phone Case",
    },
    {
      thumb: "assets/portfolio/pineapple_pen_sm.jpg",
      src: "assets/portfolio/pineapple_pen.jpg",
      caption: "Pineapple Pen",
    },
    {
      thumb: "assets/portfolio/planner_sm.jpg",
      src: "assets/portfolio/planner.jpg",
      caption: "Planner",
    },
    {
      thumb: "assets/portfolio/plate_sm.jpg",
      src: "assets/portfolio/plate.jpg",
      caption: "Plate",
    },
    {
      thumb: "assets/portfolio/prints_sm.jpg",
      src: "assets/portfolio/prints.jpg",
      caption: "Prints",
    },
    {
      thumb: "assets/portfolio/pumpkins_sm.jpg",
      src: "assets/portfolio/pumpkins.jpg",
      caption: "Pumpkins",
    },
    {
      thumb: "assets/portfolio/shop_sm.jpg",
      src: "assets/portfolio/shop.jpg",
      caption: "Shop",
    },
    {
      thumb: "assets/portfolio/table_sm.jpg",
      src: "assets/portfolio/table.jpg",
      caption: "Table",
    },
    {
      thumb: "assets/portfolio/unicorn_planter_sm.jpg",
      src: "assets/portfolio/unicorn_planter.jpg",
      caption: "Unicorn Planter",
    },
    {
      thumb: "assets/portfolio/valentin_mug_sm.jpg",
      src: "assets/portfolio/valentin_mug.jpg",
      caption: "Valentin Mug",
    },
    {
      thumb: "assets/portfolio/valentina_address_book_sm.jpg",
      src: "assets/portfolio/valentina_address_book.jpg",
      caption: "Valentina Address Book",
    },
    {
      thumb: "assets/portfolio/watercolor_sm.jpg",
      src: "assets/portfolio/watercolor.jpg",
      caption: "Watercolor",
    },
    {
      thumb: "assets/portfolio/wrapping_paper_sm.jpg",
      src: "assets/portfolio/wrapping_paper.jpg",
      caption: "Wrapping Paper",
    },
    {
      thumb: "assets/portfolio/you_got_this_sm.jpg",
      src: "assets/portfolio/you_got_this.jpg",
      caption: "You Got This",
    },
  ]
</script>

<style lang="scss">
  @import "../assets/css/vendor/vue-lightbox.css";

  .portfolio section > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
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
