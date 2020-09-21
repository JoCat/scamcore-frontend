<template>
  <div>
    <header class="alternative">
      <div class="container">
        <Nav type="alternative"/>
      </div>
    </header>
    <main>
      <section class="container contacts-page">
        <div class="title-wrapper">
          <h2 class="title">Наши<br> контакты</h2>
          <a class="bttn" href="#">База знаний</a>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-5 col-xl-4 phone">
            <p>Телефон для звонков</p>
            <a href="tel:+79179036183">+7 917 903 61 83</a>
          </div>
          <div class="col-md-6 col-lg-4 email">
            <p>Наша почта</p>
            <a href="mailto:hi@site.com">hi@site.com</a>
          </div>
          <div class="col-sm-4 col-md-6 col-lg-3 col-xl-4 social">
            <a href="#"><img src="/images/twitter.png" alt=""></a>
            <a href="#"><img src="/images/telegram.png" alt=""></a>
            <a href="#"><img src="/images/vk.png" alt=""></a>
          </div>
        </div>
        <div class="row chat">
          <div class="col-sm-1 col-md-3 col-lg-5 col-xl-4">
            <img src="/images/chat.png" alt="">
          </div>
          <div class="col-sm-5 col-md-5 col-lg-4 col-xl-5">
            <p>Онлайн чат поддержки сайта</p>
          </div>
          <div class="col-sm-5 col-md-4 col-lg-3">
            <a href="#">Перейти</a>
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
