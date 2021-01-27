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
    title: 'Физические <br> выделенные серверы',
    description: 'Мощные серверы для размещения Вашего проекта по любым требованиям производительности',
      button: {
        text: 'Просмотреть услуги',
        href: '#'
      }
    },
    main: {
      title: 'Выделенные серверы',
    }
  },
  ua: {},
  en: {}
}
</script>