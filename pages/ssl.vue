<template>
  <div>
    <header class="ssl">
      <div class="container">
        <Nav />
        <div class="lead">
          <h1 v-html="translate.header.title"></h1>
          <p v-html="translate.header.description"></p>
        </div>
      </div>
    </header>
    <main>
      <section class="container ssl-page">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="ssl-card">
              <strong class="ssl-title"
                >PositiveSSL<br />
                Multi Domain</strong
              >
              <div class="row info">
                <div class="col-5">
                  Домены
                  <strong>1</strong>
                </div>
                <div class="col-7">
                  Уровень валидации
                  <strong>Домен (DV)</strong>
                </div>
                <div class="col-12">
                  Неограниченные поддомены
                  <strong>Нет</strong>
                </div>
              </div>
              <hr />
              <div class="price"><span>4451 руб</span> в год</div>
              <a class="buy" href="#">Заказать сертификат</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="ssl-card">
              <strong class="ssl-title"
                >PositiveSSL<br />
                Multi Domain</strong
              >
              <div class="row info">
                <div class="col-5">
                  Домены
                  <strong>1</strong>
                </div>
                <div class="col-7">
                  Уровень валидации
                  <strong>Домен (DV)</strong>
                </div>
                <div class="col-12">
                  Неограниченные поддомены
                  <strong>Нет</strong>
                </div>
              </div>
              <hr />
              <div class="price"><span>4451 руб</span> в год</div>
              <a class="buy" href="#">Заказать сертификат</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 m-auto">
            <div class="ssl-card">
              <strong class="ssl-title"
                >PositiveSSL<br />
                Multi Domain</strong
              >
              <div class="row info">
                <div class="col-5">
                  Домены
                  <strong>1</strong>
                </div>
                <div class="col-7">
                  Уровень валидации
                  <strong>Домен (DV)</strong>
                </div>
                <div class="col-12">
                  Неограниченные поддомены
                  <strong>Нет</strong>
                </div>
              </div>
              <hr />
              <div class="price"><span>4451 руб</span> в год</div>
              <a class="buy" href="#">Заказать сертификат</a>
            </div>
          </div>
        </div>
        <div class="row ssl-advantages">
          <div class="col-12 col-lg-5">
            <img class="img-fluid" src="/images/ssl.png" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <ul
              class="list-unstyled"
              v-for="(left, i) in translate.advatages.left"
              :key="i"
            >
              <li>{{ left.title }}</li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <ul
              class="list-unstyled"
              v-for="(right, i) in translate.advatages.right"
              :key="i"
            >
              <li>{{ right.title }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="container faq">
        <h2 class="title">Ответы на <br />частые вопросы</h2>
        <div class="row wrapper">
          <div class="col-md-5 col-xl-4">
            <button type="button">
              Как сделать что то и что бы это получилось в две строки
            </button>
            <button type="button">
              Как сделать что то и что бы это получилось в две строки
            </button>
            <button type="button">
              Как сделать что то и что бы это получилось в две строки
            </button>
            <button type="button">
              Как сделать что то и что бы это получилось в две строки
            </button>
            <button type="button">
              Как сделать что то и что бы это получилось в две строки
            </button>
            <button type="button">
              Как сделать что то и что бы это получилось в две строки
            </button>
          </div>
          <div class="col-md-7 col-xl-8">
            <strong
              ><span>Как заказать</span><br />
              выделенный сервер в России?</strong
            >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptate
            </p>
          </div>
        </div>
      </section>
      <Feedback />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    translate() {
      return this.$getTranslate(translate);
    },
  },
});

const translate = {
  ru: {
    header: {
      title: "SSL сертификаты",
      description:
        "Различные виды сертификатов для безопасной передачи данных между пользователем и веб-ресурсом",
    },
    advatages: {
      left: [
        {
          title: "Безопасное подключение к сайту",
        },
        {
          title: "Доверие всех популярных браузеров",
        },
        {
          title: "Высокий уровень шифрования данных",
        },
      ],
      right: [
        {
          title: "Повышение конверсии на сайте",
        },
        {
          title: "Предпочтение поисковых систем",
        },
        {
          title: "Круглосуточная техническая поддержка",
        },
      ],
    },
  },
  ua: {},
  en: {},
};
</script>
