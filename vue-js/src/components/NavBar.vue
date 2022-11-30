<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <span class="fs-4">«Самоход»</span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Регистрация</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Авторизация</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Мои заказы</a>
        <a class="me-3 py-2 text-dark text-decoration-none" href="#">Корзина</a>
      </nav>
    </div>

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Каталог товаров</h1>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
