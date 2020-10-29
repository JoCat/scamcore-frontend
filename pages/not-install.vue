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
        <h2 class="title center">Сервера без установки</h2>
        <div class="row">
          <div class="col-12 col-lg-10 col-xl-9 m-auto">
            <Subscribe/>
          </div>
        </div>
        <ServersFilter/>
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
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
            </tbody>
          </table>
        </div>
      </section>
      <ServerOs/>
      <ImportantAdvantages/>
      <Offers/>
      <Faq/>
      <Feedback/>
    </main>
    <Footer/>
  </div>
</template>
