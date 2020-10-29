<template>
<tr>
  <td>
    <div class="geekbench">
      <div class="geekbench-meter">
        <svg class="speedometer__arrow" :style="styles.arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
          <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
        </svg>
        <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
          <g transform="translate(-442.005 -274.997)">
            <path
              d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
              stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
            <path class="speedometer__speed" :style="styles.speed"
              d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
              stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
          </g>
        </svg>
      </div>
      <span class="speedometer__score">{{ geekbench.score }}</span>
    </div>
  </td>
  <td>{{ data.cpu }}</td>
  <td>{{ data.ram }}</td>
  <td>{{ data.storage }}</td>
  <td>{{ data.traffic }}</td>
  <td>{{ data.ddos }}</td>
  <td>
    <img src="/images/flags/united kingdom.png" alt="">
    <img src="/images/flags/england.png" alt="">
    <img src="/images/flags/canada.png" alt="">
  </td>
  <td>
    <!-- <div class="price sale">
      <div class="percent">-20%</div>
      1257₽<br>
      <div class="old-price">2000₽</div>
    </div>
    <a href="#">Купить</a> -->

    <div class="price">{{ data.price }}₽</div>
    <a href="#">Купить</a>
  </td>
</tr>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['data', 'geekbenchMax'],
  data() {
    return {
      geekbench: {
        score: 0
      },
      styles: {
        arrow: {
          transform: 'rotate(0deg)'
        },
        speed: {
          strokeDashoffset: '87.4986px',
          strokeDasharray: '87.4986px'
        }
      }
    }
  },
  mounted() {
    const percent = (this.data.geekbench / this.geekbenchMax)
    this.styles.arrow.transform = `rotate(${238 * percent}deg)`
    this.styles.speed.strokeDashoffset = `${(87.4986 - 87.4986 * percent).toFixed(4)}px`

    for (let index = 0; index < 100; index++) {
      setTimeout(() => {
        this.geekbench.score = parseInt((this.data.geekbench / 100 * index).toFixed(0), 10)
      }, index * 10)
    }
    setTimeout(() => {this.geekbench.score = this.data.geekbench}, 1000)
  }
})
</script>
