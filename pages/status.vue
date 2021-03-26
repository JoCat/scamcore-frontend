<template>
  <div>
    <header class="status">
      <div class="container">
        <Nav />
      </div>
    </header>
    <main>
      <section class="container server-status">
        <h2 class="extra-title">Server Status</h2>
        <div class="row">
          <div class="col-lg-10 col-xl-8 m-auto">
            <div class="server-status-list">
              <div class="head">
                <div class="name">
                  Название<br />
                  страницы сервера
                </div>
                <div class="buttons">
                  <div class="prev disabled"></div>
                  <div class="next"></div>
                </div>
              </div>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Compute Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="location">
                        <img src="/images/flags/united states.png" alt="" />
                        Atlanta - <span>United States</span>
                      </td>
                      <td>
                        <img src="/images/status/good.png" alt="" />
                        so good
                      </td>
                      <td>
                        <img src="/images/status/bad.png" alt="" />
                        dont work
                      </td>
                    </tr>
                    <tr>
                      <td class="location">
                        <img src="/images/flags/united states.png" alt="" />
                        Atlanta - <span>United States</span>
                      </td>
                      <td>
                        <img src="/images/status/good.png" alt="" />
                        so good
                      </td>
                      <td>
                        <img src="/images/status/bad.png" alt="" />
                        dont work
                      </td>
                    </tr>
                    <tr>
                      <td class="location">
                        <img src="/images/flags/united states.png" alt="" />
                        Atlanta - <span>United States</span>
                      </td>
                      <td>
                        <img src="/images/status/good.png" alt="" />
                        so good
                      </td>
                      <td>
                        <img src="/images/status/bad.png" alt="" />
                        dont work
                      </td>
                    </tr>
                    <tr>
                      <td class="location">
                        <img src="/images/flags/united states.png" alt="" />
                        Atlanta - <span>United States</span>
                      </td>
                      <td>
                        <img src="/images/status/good.png" alt="" />
                        so good
                      </td>
                      <td>
                        <img src="/images/status/bad.png" alt="" />
                        dont work
                      </td>
                    </tr>
                    <tr>
                      <td class="location">
                        <img src="/images/flags/united states.png" alt="" />
                        Atlanta - <span>United States</span>
                      </td>
                      <td>
                        <img src="/images/status/good.png" alt="" />
                        so good
                      </td>
                      <td>
                        <img src="/images/status/bad.png" alt="" />
                        dont work
                      </td>
                    </tr>
                    <tr>
                      <td class="location">
                        <img src="/images/flags/united states.png" alt="" />
                        Atlanta - <span>United States</span>
                      </td>
                      <td class="warning">
                        <img src="/images/status/warning.png" alt="" />
                        so good
                      </td>
                      <td>
                        <img src="/images/status/bad.png" alt="" />
                        dont work
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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

      <section class="container feedback">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 class="title">У вас еще остались <br />вопросы?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
            <form action="">
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Ваш Email" />
              <button type="submit">Получить консультацию</button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
