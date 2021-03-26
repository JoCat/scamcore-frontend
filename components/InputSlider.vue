<template>
  <div :id="name + '-slider'"></div>
</template>

<script lang="ts">
import Vue from "vue";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.min.css";

export default Vue.extend({
  props: {
    name: String,
    config: Object
  },
  mounted() {
    const slider = document.getElementById(
      this.name + "-slider"
    ) as HTMLElement;
    const _noUislider = noUiSlider.create(
      slider,
      Object.assign(
        {
          connect: true,
          tooltips: true,
          format: {
            to: (value: number) =>
              value.toFixed(this.name == "frequency" ? 2 : 0),
            from: (value: any) => value
          }
        },
        this.config
      )
    );

    const min = document.createElement("div");
    min.className = "slider-value-min";
    slider.appendChild(min);
    const max = document.createElement("div");
    max.className = "slider-value-max";
    slider.appendChild(max);

    // Юзать change если будет лагать
    _noUislider.on("update", (values, handle) => {
      if (values.length === 2) {
        [min, max][handle].innerHTML =
          values[handle] + (this.config.suffix || "");
        this.$emit("input", {
          min: values[0],
          max: values[1]
        });
      } else {
        max.innerHTML = values[0] + (this.config.suffix || "");
        this.$emit("input", values[0]);
      }
    });
  }
});
</script>
