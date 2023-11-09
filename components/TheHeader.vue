<script setup>

</script>

<template>
  <header class="header">
    <nav class="menu">
      <NuxtLink class="menu__logo" to="/">
        CarPrice
      </NuxtLink>
      <ul class="menu__list">
        <li>
          <NuxtLink class="menu__list-link" to="/about">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="menu__list-link" to="/products">
            Products
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);

}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $padding-default $padding-default;

  &__logo {
    padding: $padding-default * 0.5  $padding-default * 2;
    color: $btn-text-default;
    font-size: 28px;
    border-radius: $border-radius-default;
  }

  &__list {
    display: flex;
    gap: $gap-default;
    margin: 0;

    &-link {
      display: block;
      padding: $padding-default $padding-default * 2;
      color: $btn-text-default;
      border-radius: $border-radius-default;
    }

  }

  .router-link-exact-active {
    color:$btn-text-active;
    background-color: $btn-bg-active;
}
}
</style>
