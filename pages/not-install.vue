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
      <section class="container servers-list">
        <h2 class="title center">{{ translate.main.title }}</h2>
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
              <!--ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/>
              <ServerCard/-->
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
    title: 'Выделенные серверы <br> без установки',
    description: 'Выделенные серверы в популярных дата-центрах без платы за установку, которая уже оплачена прошлым владельцем',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main: {
      title: 'Серверы без установки',
    }
  },
  ua: {},
  en: {}
}
</script>