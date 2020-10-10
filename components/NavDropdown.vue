<template>
  <div class="dropdown" :class="showMenu ? 'active' : ''">
    <a class="dropdown-link" href="#" @click.prevent="toggleDropdown()">{{ title }}</a>
    <div class="dropdown-menu" v-if="showMenu">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLink } from './Nav.vue'

export default Vue.extend({
  props: ['title'],
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showMenu = !this.showMenu
    }
  }
})
</script>
