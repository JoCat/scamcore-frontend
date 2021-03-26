<template>
  <div class="modal-overlay" v-if="show" @click.self="hideModal">
    <div class="modal">
      <div class="modal-close" @click="hideModal"></div>
      <div class="modal-title">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
    hideModal() {
      this.show = false;
    },
  },
});
</script>
