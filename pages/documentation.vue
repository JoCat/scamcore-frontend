<template>
  <div>
    <header class="alternative">
      <div class="container">
        <Nav type="alternative"/>
      </div>
    </header>
    <main>
      <section class="container documentation">
        <h2 class="title">Наша<br> документация</h2>
        <a class="documentation-link" href="#">
          <img src="/images/documentation-deal.png" alt="">
          <div>
            <strong>Соглашение о предоставлениие услуги</strong>
            <p>договор между компанией SpaceCore.pro и их пользователями.</p>
          </div>
        </a>
        <a class="documentation-link" href="#">
          <img src="/images/documentation-lock.png" alt="">
          <div>
            <strong>Политика конфиденциальности</strong>
            <p>определяет политику в отношении обработки персональных данных.</p>
          </div>
        </a>
        <a class="documentation-link" href="#">
          <img src="/images/documentation-deal.png" alt="">
          <div>
            <strong>Публичная оферта</strong>
            <p>публичное предложение Хостера с Пользователем договор аренды услуг.</p>
          </div>
        </a>
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
