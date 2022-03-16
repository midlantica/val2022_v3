<template>
  <main>
    <section>
      <div class="flexxy">
        <Bio />
        <HomeContent />
      </div>
    </section>

    <aside>
      <Social />
    </aside>
  </main>
</template>

<script setup>
  import HomeContent from "../components/HomeContent.vue"
  import Bio from "../components/Bio.vue"
  import Social from "../components/Social.vue"
</script>
