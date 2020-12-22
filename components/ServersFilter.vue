<template>
  <form class="filter row">
    <div class="col-12 col-md-6">
      <label>Стоимость</label>
      <InputSlider
        :config="{
          range: {
            min: 0,
            max: 10000
          },
          step: 1,
          start: [2000, 8000],
          suffix: ' руб'
        }"
        name="price"
        v-on:valuesUpdate.prevent="priceUpdate"
      />
      <!-- <div id="price-slider"></div>
      <input type="hidden" name="price_min">
      <input type="hidden" name="price_max"> -->
        <!-- document.addEventListener('DOMContentLoaded', () => {
          createSlider('price', {
            range: {
              min: 0,
              max: 10000
            },
            step: 1,
            start: [2000, 8000]
          }, ' руб');
        }); -->
    </div>
    <div class="col-12 col-md-6">
      <label>При оплате за:</label>
      <div class="checkbox-button">
        <input type="checkbox" id="period1" name="period" value="1">
        <label for="period1">1 месяц</label>
      </div>
      <div class="checkbox-button">
        <input type="checkbox" id="period2" name="period" value="2">
        <label for="period2">3 месяца</label>
      </div>
      <div class="checkbox-button">
        <input type="checkbox" id="period3" name="period" value="3">
        <label for="period3">6 месяцев</label>
      </div>
      <div class="checkbox-button">
        <input type="checkbox" id="period4" name="period" value="4">
        <label for="period4">1 год</label>
      </div>
    </div>
    <div class="gray-overlay">
      <div class="row">
        <div class="col-12 col-md-4">
          <label>Процессор</label>
          <div class="checkbox">
            <input type="checkbox" id="proc1" name="proc" value="1">
            <label for="proc1">Название</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="proc2" name="proc" value="2">
            <label for="proc2">Название</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="proc3" name="proc" value="3">
            <label for="proc3">Название</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="proc4" name="proc" value="4">
            <label for="proc4">Название</label>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <label>Кол-во ядер</label>
          <div id="core-slider"></div>
          <input type="hidden" name="core_min">
          <input type="hidden" name="core_max">
          <script>
            document.addEventListener('DOMContentLoaded', () => {
              createSlider('core', {
                range: {
                  'min': 4,
                  '25%' : 6,
                  '50%' : 10,
                  '75%' : 12,
                  'max': 20
                },
                step: 1,
                start: [4, 20],
                snap: true
              });
            });
          </script>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <label>Частота</label>
          <div id="frequency-slider"></div>
          <input type="hidden" name="frequency_min">
          <input type="hidden" name="frequency_max">
          <script>
            document.addEventListener('DOMContentLoaded', () => {
              createSlider('frequency', {
                range: {
                  min: 2,
                  max: 4.60
                },
                step: 0.2,
                start: [2, 4.60]
              }, ' ГГц');
            });
          </script>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <label>Тип диска</label>
      <div class="checkbox">
        <input type="checkbox" id="drive1" name="drive" value="1">
        <label for="drive1">Название</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="drive2" name="drive" value="2">
        <label for="drive2">Название</label>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
      <label>Кол-во дисков</label>
      <div class="checkbox">
        <input type="checkbox" id="drive_count1" name="drive_count" value="1">
        <label for="drive_count1">1</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="drive_count2" name="drive_count" value="2">
        <label for="drive_count2">2</label>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4">
      <label>Объём дисков</label>
      <div id="storage-slider"></div>
      <input type="hidden" name="storage_min">
      <input type="hidden" name="storage_max">
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          createSlider('storage', {
            range: {
              'min': 240,
              '12.5%' : 256,
              '25%' : 512,
              '37.5%' : 600,
              '50%' : 960,
              '62.5%' : 1000,
              '75%' : 1920,
              '87.5%' : 2000,
              'max': 4000
            },
            step: 1,
            start: [240, 4000],
            snap: true
          }, ' Гб');
        });
      </script>
    </div>
    <div class="col-12 col-sm-6 col-md-2">
      <input type="reset" value="Сбросить">
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      price: {
        min: 0,
        max: 0
      }
    }
  },
  methods: {
    priceUpdate(values: number[]) {
      this.price.min = values[0]
      this.price.max = values[1]
    }
  }
})
</script>
