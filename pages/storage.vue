<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1 v-html="translate.header.title"></h1>
            <p v-html="translate.header.description"></p>
            <a :href="translate.header.button.href">{{ translate.header.button.text }}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container storage-page">
        <div class="row">
          <div class="col-12 col-lg-6">
            <strong v-html="translate.form.title"></strong>
            <div class="slider-overlay">
              <img src="/images/storage/database.png" alt="">
              <div>
                <p>{{ translate.form.volume }}</p>
                <div id="storage-slider"></div>
                <input type="hidden" name="storage">
                <script>
                  document.addEventListener('DOMContentLoaded', () => {
                    const slider = document.getElementById('storage-slider');
                    noUiSlider.create(slider, {
                      range: {
                        min: 50,
                        max: 400
                      },
                      step: 50,
                      start: [250],
                      connect: 'lower',
                      tooltips: true,
                      format: {
                        to: value =>  value.toFixed(0),
                        from: value => value
                      }
                    });
                    const max = document.createElement('div');
                    max.className = 'slider-value-max';
                    slider.appendChild(max);

                    slider.noUiSlider.on('update', (values) => {
                      document.querySelector(`[name=storage]`).value = values[0];
                      max.innerHTML =  `${values[0]} GB`;
                    });
                  });
                </script>
              </div>
            </div>
            <div class="slider-overlay">
              <img src="/images/storage/users.png" alt="">
              <div>
                <p>{{ translate.form.ftp_users }}</p>
                <div id="users-slider"></div>
                <input type="hidden" name="users">
                <script>
                  document.addEventListener('DOMContentLoaded', () => {
                    const slider = document.getElementById('users-slider');
                    noUiSlider.create(slider, {
                      range: {
                        min: 50,
                        max: 400
                      },
                      step: 50,
                      start: [250],
                      connect: 'lower',
                      tooltips: true,
                      format: {
                        to: value =>  value.toFixed(0),
                        from: value => value
                      }
                    });
                    const max = document.createElement('div');
                    max.className = 'slider-value-max';
                    slider.appendChild(max);

                    slider.noUiSlider.on('update', (values) => {
                      document.querySelector(`[name=users]`).value = values[0];
                      max.innerHTML =  `${values[0]} GB`;
                    });
                  });
                </script>
              </div>
            </div>
            <div class="select-overlay">
              <p>{{ translate.form.location }}</p>
              <select id="select-storage">
                <option value>Выбор ПО</option>
                <option value="lamp">LAMP</option>
                <option value="lemp">LEMP</option>
                <option value="vpn">OpenVpn</option>
              </select>
              <script>
                document.addEventListener('DOMContentLoaded', () => {
                  customSelect('#select-storage')
                });
              </script>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="block">
              <strong>{{ translate.form.price }}</strong>
              <div class="price">$5.00/{{ translate.form.month }}</div>
              <div class="characteristics">
                <b>250 GB</b> {{ translate.form.storage }}<br>
                <b>1000 GB </b> {{ translate.form.traffic }}
              </div>
              <div class="info">
                {{ translate.form.additional_storage }}
              </div>
              <a href="#">{{ translate.order }}</a>
            </div>
          </div>
        </div>
      </section>
      <Feedback/>
    </main>
    <Footer/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    translate() {
      return this.$getTranslate(this.$store.state.lang, translate);
    }
  }
})

const translate = {
  ru: {
    header: {
      title: 'Услуги<br> FTP хранилища',
      description: 'Идеальный сервис для безопасного хранения<br> любого объема Ваших данных',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    form: {
      title: 'Конфигурация<br> FTP хранилища',
      volume: 'Объем хранилища',
      ftp_users: 'Кол-во FTP юзеров',
      location: 'Локация',
      price: 'Стоимость',
      month: 'мес.',
      storage: 'диска',
      traffic: 'трафика',
      additional_storage:'12 руб. за дополнительный GB'
    },
    order: 'Заказать'
  },
  ua: {},
  en: {}
}
</script>
