<template>
  <nav>
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/auth" class="link">Войти в аккаунт</router-link>
    <router-link to="/orders" class="link">Заказы</router-link>
    <router-link to="/basket" class="link">Корзина</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>

</style>
