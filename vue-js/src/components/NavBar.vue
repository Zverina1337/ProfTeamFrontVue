<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-white">Каталог</router-link></li>
          <li><router-link to="/basket" class="nav-link px-2 text-white">Корзина</router-link></li>
          <li><router-link to="/orders" class="nav-link px-2 text-white">Заказы</router-link></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2"><router-link to="login" style="color: inherit; text-decoration: none">Войти</router-link></button>
          <button type="button" class="btn btn-warning"><router-link to="signup" style="color: inherit; text-decoration: none">Зарегистрироваться</router-link></button>
        </div>
      </div>
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
