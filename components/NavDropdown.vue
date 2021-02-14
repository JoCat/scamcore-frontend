<template>
  <div class="dropdown" :class="showMenu ? 'active' : ''">
    <a
      href="#"
      class="dropdown-link"
      :class="is_lang ? 'lang' : ''"
      @click.prevent="toggleDropdown()"
      >{{ is_lang ? title.toUpperCase() : title }}</a
    >
    <div class="dropdown-menu" v-if="showMenu">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["title", "is_lang"],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showMenu = !this.showMenu;
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).parentElement !== this.$el)
        this.showMenu = false;
    });
  },
});
</script>
