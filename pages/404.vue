<template>
  <header class="page404">
    <img class="bg" src="/images/404.png" alt="">
    <div class="container">
        <nav><img src="/images/logo.png" alt=""></nav>
        <nuxt-link to="/">{{ translate.link }}</nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      translate: translate
    }
  }
})

let translate = {
  link: 'На главную'
}
</script>
