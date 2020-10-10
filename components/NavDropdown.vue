<template>
  <div class="dropdown" :class="showMenu ? 'active' : ''">
    <a href="#" @click.prevent="toggleDropdown()">{{ el.title }}</a>
    <div class="dropdown-menu" v-if="showMenu">
      <NavLink v-for="(link, j) in el.elements" :key="j" :el="link"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLink, isExternalLink } from './Nav.vue'

export default Vue.extend({
  props: ['el'],
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    isExternalLink: isExternalLink,
    toggleDropdown() {
      this.showMenu = !this.showMenu
    }
  }
})
</script>
