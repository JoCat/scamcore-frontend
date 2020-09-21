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
      <section class="container servers-list">
        <h2 class="title center">VDS сервера</h2>
        <form class="filter row">
          <div class="col-12 col-md-6">
            <label>Стоимость</label>
            <div id="price-slider"></div>
            <input type="hidden" name="price_min">
            <input type="hidden" name="price_max">
            <script>
              document.addEventListener('DOMContentLoaded', () => {
                createSlider('price', {
                  range: {
                    min: 0,
                    max: 10000
                  },
                  step: 1,
                  start: [2000, 8000]
                }, ' руб');
              });
            </script>
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
        <div class="list">
          <table>
            <thead>
              <tr>
                <th>Geekbench</th>
                <th>Процессор</th>
                <th>ОЗУ</th>
                <th>Накопитель</th>
                <th>Трафик</th>
                <th>A-DDoS</th>
                <th>Локация</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="8" class="list-title">
                  <div>SAS VPS/VDS в ЕС (OpenVZ)</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/united kingdom.png" alt="">
                  <img src="/images/flags/england.png" alt="">
                  <img src="/images/flags/canada.png" alt="">
                </td>
                <td>
                  <div class="price sale">
                    <div class="percent">-20%</div>
                    1257₽<br>
                    <div class="old-price">2000₽</div>
                  </div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/united kingdom.png" alt="">
                  <img src="/images/flags/england.png" alt="">
                  <img src="/images/flags/canada.png" alt="">
                </td>
                <td>
                  <div class="price sale">
                    <div class="percent">-20%</div>
                    1257₽<br>
                    <div class="old-price">2000₽</div>
                  </div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/russia.png" alt="">
                  <img src="/images/flags/united states.png" alt="">
                </td>
                <td>
                  <div class="price">1257₽</div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/russia.png" alt="">
                  <img src="/images/flags/united states.png" alt="">
                </td>
                <td>
                  <div class="price">1257₽</div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/russia.png" alt="">
                  <img src="/images/flags/united states.png" alt="">
                </td>
                <td>
                  <div class="price">1257₽</div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/russia.png" alt="">
                  <img src="/images/flags/united states.png" alt="">
                </td>
                <td>
                  <div class="price">1257₽</div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/russia.png" alt="">
                  <img src="/images/flags/united states.png" alt="">
                </td>
                <td>
                  <div class="price">1257₽</div>
                  <a href="#">Купить</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="geekbench" data-geekbench="24547" data-geekbench-max="41675">
                    <div class="geekbench-meter">
                      <svg class="speedometer__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 5.5">
                        <path d="M18.3,0.8c0.5-0.8,1.5-1,2.2-0.7c0.7,0.4,1.2,1.3,0.9,2c-0.2,0.6-0.8,1-1.5,1l-7.2,2.3L18.3,0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="#7D38F2"/>
                      </svg>
                      <svg class="speedometer__dial" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 36">
                        <g transform="translate(-442.005 -274.997)">
                          <path
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#e6e9eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                          <path class="speedometer__speed"
                            style="stroke-dashoffset: 87.4986px; stroke-dasharray: 87.4986px;"
                            d="M445.9,308c-4.9-11.1,0.1-24.1,11.2-29c11.1-4.9,24.1,0.1,29,11.2c2.5,5.7,2.5,12.2,0,17.9" fill="none"
                            stroke="#7D38F2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        </g>
                      </svg>
                    </div>
                    <span class="speedometer__score" data-animation-score="24547">24547</span>
                  </div>
                </td>
                <td>Название<br> процессора</td>
                <td>12345</td>
                <td>SSD 120ГБ /<br> HDD 1ТБ</td>
                <td>Безлимит до<br> 500 мбит/с</td>
                <td>Значение</td>
                <td>
                  <img src="/images/flags/russia.png" alt="">
                  <img src="/images/flags/united states.png" alt="">
                </td>
                <td>
                  <div class="price">1257₽</div>
                  <a href="#">Купить</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="container os">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3 el">
            <img src="/images/os/windows.png" alt="">
            <p>
              Название системы<br>
              Название<br>
              Наименование<br>
              Система операций
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-3 el">
            <img src="/images/os/ubuntu.png" alt="">
            <p>
              Название системы<br>
              Название<br>
              Наименование<br>
              Система операций
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-3 el">
            <img src="/images/os/settings.png" alt="">
            <p>
              Название системы<br>
              Название<br>
              Наименование<br>
              Система операций
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-3 el">
            <img src="/images/os/linux.png" alt="">
            <p>
              Название системы<br>
              Название<br>
              Наименование<br>
              Система операций
            </p>
          </div>
        </div>
      </section>

      <section class="container important-advantages">
        <h2 class="title center">6 важных преимуществ</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-xl-4 el">
            <img src="/images/important-advantages/1.png" alt="">
            <div>
              <strong>Заголовок преимущества</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4 el">
            <img src="/images/important-advantages/2.png" alt="">
            <div>
              <strong>Заголовок преимущества</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4 el">
            <img src="/images/important-advantages/3.png" alt="">
            <div>
              <strong>Заголовок преимущества</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4 el">
            <img src="/images/important-advantages/4.png" alt="">
            <div>
              <strong>Заголовок преимущества</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4 el">
            <img src="/images/important-advantages/5.png" alt="">
            <div>
              <strong>Заголовок преимущества</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-4 el">
            <img src="/images/important-advantages/6.png" alt="">
            <div>
              <strong>Заголовок преимущества</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
        </div>
      </section>

      <section class="container other-offers">
        <h2 class="title center">Другие предложения</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-xl-4">
            <strong>Название услуги <span>в две строки</span></strong>
            <ul class="list-unstyled">
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
            </ul>
            <a href="">Заказать услугу</a>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <strong>Название услуги <span>в две строки</span></strong>
            <ul class="list-unstyled">
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
            </ul>
            <a href="">Заказать услугу</a>
          </div>
          <div class="col-12 col-md-6 col-xl-4">
            <strong>Название услуги <span>в две строки</span></strong>
            <ul class="list-unstyled">
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
              <li>Какое то преимущество услуги</li>
            </ul>
            <a href="">Заказать услугу</a>
          </div>
        </div>
      </section>

      <section class="container faq">
        <h2 class="title">Ответы на <br>частые вопросы</h2>
        <div class="row wrapper">
          <div class="col-md-5 col-xl-4">
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
            <button type="button">Как сделать что то и что бы это получилось в две строки</button>
          </div>
          <div class="col-md-7 col-xl-8">
            <strong><span>Как заказать</span><br> выделенный сервер в России?</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptate</p>
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
