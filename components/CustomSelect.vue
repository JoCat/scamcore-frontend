<template>
  <select
    v-bind:value="value"
    v-on:change="$emit('input', $event.target.value)"
  >
    <slot />
  </select>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["value"],
  mounted() {
    require("custom-select").default(this.$el);
  },
  watch: {
    value() {
      (this.$el as any).customSelect.value = this.value;
    },
  },
});
</script>
