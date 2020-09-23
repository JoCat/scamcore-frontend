<template>
  <!-- Modal -->
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-close"></div>
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
          <select id="select1">
            <option value>Выбор ПО</option>
            <option value="lamp">LAMP</option>
            <option value="lemp">LEMP</option>
            <option value="vpn">OpenVpn</option>
          </select>
          <script>
            //document.addEventListener('DOMContentLoaded', () => {
            //  customSelect('#select1')
            //});
          </script>
          <select id="select2">
            <option value>Предустановленное ПО</option>
            <option value="lamp">LAMP</option>
            <option value="lemp">LEMP</option>
            <option value="vpn">OpenVpn</option>
          </select>
          <script>
            //document.addEventListener('DOMContentLoaded', () => {
            //  customSelect('#select2')
            //});
          </script>
          <input type="text" placeholder="Домен">
          <select id="select3">
            <option value>Локация</option>
            <option value="lamp">LAMP</option>
            <option value="lemp">LEMP</option>
            <option value="vpn">OpenVpn</option>
          </select>
          <script>
            //document.addEventListener('DOMContentLoaded', () => {
            //  customSelect('#select3')
            //});
          </script>
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
