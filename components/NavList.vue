<template>
  <div>
    <a href="#">{{ title }}</a>
    <ul class="list-unstyled">
      <li><slot/></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavLink } from './Nav.vue'

export default Vue.extend({
  props: ['title'],
})
</script>
