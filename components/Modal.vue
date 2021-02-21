<template>
  <div class="modal-overlay" v-if="show" @click.self="hideModal">
    <div class="modal">
      <div class="modal-close" @click="hideModal"></div>
      <div class="modal-title">Заказать сервер</div>
      <div class="row">
        <div class="col-6 server-info">
          <div class="modal-title">Характеристики</div>
          <ul class="list-unstyled">
            <li>
              <img src="/images/icons/chip.png" alt="">
              1 ядро Intel Core i7-6700 4.2 GHz
            </li>
            <li>
              <img src="/images/icons/memory.png" alt="">
              4 GB DDR4 RAM
            </li>
            <li>
              <img src="/images/icons/ssd.png" alt="">
              50 GB NVMe
            </li>
            <li>
              <img src="/images/icons/network.png" alt="">
              1000 Mbps порт
            </li>
            <li>
              <img src="/images/icons/guard.png" alt="">
              Standard-AntiDDoS
            </li>
          </ul>
          <p>Цена</p>
          <div class="price">5364 rub</div>
        </div>
        <div class="col-12 col-md-6">
          <custom-select>
            <option value>Выбор ПО</option>
            <option value="lamp">LAMP</option>
            <option value="lemp">LEMP</option>
            <option value="vpn">OpenVpn</option>
          </custom-select>
          <custom-select>
            <option value>Предустановленное ПО</option>
            <option value="lamp">LAMP</option>
            <option value="lemp">LEMP</option>
            <option value="vpn">OpenVpn</option>
          </custom-select>
          <input type="text" placeholder="Домен">
          <custom-select>
            <option value>Локация</option>
            <option value="lamp">LAMP</option>
            <option value="lemp">LEMP</option>
            <option value="vpn">OpenVpn</option>
          </custom-select>
          <div class="row">
            <div class="col-12 col-md-6">
              <input type="text" placeholder="Кол-во">
            </div>
            <div class="col-12 col-md-6">
              <input type="text" placeholder="Почта">
            </div>
          </div>
          <a href="#">Оформить заказ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      show: false
    }
  },
  methods: {
    showModal() {
      this.show = true
    },
    hideModal() {
      this.show = false
    }
  }
})
</script>
