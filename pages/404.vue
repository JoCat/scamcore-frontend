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
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate);
    },
  },
})

const translate = {
  ru: {
    link: 'На главную'
  },
  ua: {},
  en: {}
}
</script>
