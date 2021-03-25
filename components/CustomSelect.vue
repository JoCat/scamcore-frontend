<template>
  <select v-on:change="$emit('input', $event.target.value)">
    <slot />
  </select>
</template>

<script>
import customSelect from "custom-select"; // так как тайпингов на эту хуйню нет, пишу на js
export default {
  mounted() {
    customSelect(this.$el);
  }
};
</script>
