<template>
  <div>
    <header class="main">
      <div class="container">
        <Nav/>
        <div class="row lead">
          <div class="col-12 col-lg-7">
            <h1>Уникальное<br> предложение тарифа</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <a href="#">Просмотреть услуги</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="container storage-page">
        <div class="row">
          <div class="col-12 col-lg-6">
            <strong>Конфигурация<br> бэкап хранилища</strong>
            <div class="slider-overlay">
              <img src="/images/storage/database.png" alt="">
              <div>
                <p>объем хранилищ</p>
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
                <p>кол-во FTP юзеров</p>
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
              <p>кол-во FTP юзеров</p>
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
              <strong>Object storage</strong>
              <div class="price">$5.00/mo</div>
              <div class="characteristics">
                <b>250 GB</b> of storage<br>
                <b>1000 GB</b> of bandwidth
              </div>
              <div class="info">
                $0.02 per additional GB stored<br>
                $0.01 per additional GB transferred
              </div>
              <a href="#">Какая то кнопочка</a>
            </div>
          </div>
        </div>
      </section>

      <section class="container feedback">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 class="title">У вас еще остались <br>вопросы?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id</p>
          </div>
          <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
            <form action="">
              <input type="text" placeholder="Ваше имя">
              <input type="text" placeholder="Ваш Email">
              <button type="submit">Получить консультацию</button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>
