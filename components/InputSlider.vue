<template>
  <div>
    <div :id="name+'-slider'">
    </div>
    <input type="hidden" :name="name+'_min'" :value="min">
    <input type="hidden" :name="name+'_max'" :value="max">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import noUiSlider from 'nouislider'
import 'nouislider/distribute/nouislider.min.css'

export default Vue.extend({
  props: {
    name: String,
    config: Object
  },
  data() {
    return {
      min: 0,
      max: 0
    }
  },
  mounted() {
    const slider = document.getElementById(this.name+'-slider') as HTMLElement
    const _noUislider = noUiSlider.create(slider, Object.assign(this.config, {
        connect: true,
        tooltips: true,
        format: {
            to: (value: number) => value.toFixed(this.name == 'frequency' ? 2 : 0),
            from: (value: any) => value
        }
    }));

    const min = document.createElement('div');
    min.className = 'slider-value-min';
    slider.appendChild(min);
    const max = document.createElement('div');
    max.className = 'slider-value-max';
    slider.appendChild(max);

    // Сбрасывать слайдеры до дефолтных значений пир сбросе формы
    // document.querySelector('.filter').addEventListener('reset', () => {
    //     slider.noUiSlider.set(settings.start)
    // });

    _noUislider.on('update', (values, handle) => {
        [min, max][handle].innerHTML = values[handle] + this.config.suffix
        this.min = values[0] // dep
        this.max = values[1] // dep
        this.$emit('valuesUpdate', values)
    });
  }
})
</script>
