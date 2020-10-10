<template>
  <div>
    <a v-if="isExternalLink(el)" :href="el.link" target="_blank">{{ el.title }}</a>
    <nuxt-link v-if="!isExternalLink(el)" :to="el.link">{{ el.title }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLink, isExternalLink } from './Nav.vue'

export default Vue.extend({
  props: ['el'],
  methods: {
    isExternalLink: isExternalLink
  }
})
</script>
