<template>
  <div
    :title="theme == `dark` ? `Dark Theme` : `Light Theme`"
    @click="toggleTheme()"
    class="theme"
  >
    <component :is="theme == `dark` ? Sun : Moon" height="20px" />
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import Moon from "../darkMode/Moon.vue"
  import Sun from "../darkMode/Sun.vue"

  let theme = ref(localStorage.getItem("theme"))

  function toggleTheme() {
    if (theme.value == "dark") {
      theme.value = "light"
      document.body.setAttribute("data-theme", "light")
      // document.body.setAttribute("data-icon", "moon")
      localStorage.setItem("theme", "light")
    } else {
      theme.value = "dark"
      document.body.setAttribute("data-theme", "dark")
      // document.body.setAttribute("data-icon", "sun")
      localStorage.setItem("theme", "dark")
    }
  }

</script>

<style lang="scss" scoped>
  .theme {
    display: block;
    cursor: pointer;
    z-index: 100;
    // width: 40px;
    // height: 40px;
    position: fixed;
    top: 1rem;
    right: 1rem;
  }

  [data-theme="dark"] button {
    color: black;
    fill: black;
  }
</style>
