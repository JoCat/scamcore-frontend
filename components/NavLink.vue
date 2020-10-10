<template>
  <div>
    <a v-if="isExternalLink(el)" :href="el.link" target="_blank">{{ el.title }}</a>
    <nuxt-link v-if="!isExternalLink(el)" :to="el.link">{{ el.title }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLink } from './Nav.vue'

export default Vue.extend({
  props: ['el'],
  methods: {
    isExternalLink(el: NavLink) {
      return el.link.startsWith('http')
    }
  }
})
</script>
