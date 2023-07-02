<template>
  <header
    class="mx-auto flex w-full max-w-[100vw] items-center justify-between gap-10 overflow-x-hidden overflow-y-visible px-8 py-6 lg:max-w-main"
  >
    <nuxt-link to="/"
      ><img
        src="/images/header_logo.svg"
        alt="Collab logo"
        class="w-24 md:w-32"
      />
    </nuxt-link>
    <button
      class="block hover:cursor-pointer lg:hidden"
      @click="toggleMenu"
    >
      <Icon
        name="material-symbols:menu-rounded"
        size="2rem"
      />
    </button>
    <layout-header-navigation
      ref="navRef"
      :is-menu-open="isMenuOpen"
      @close-menu="toggleMenu"
    />
  </header>
</template>

<script setup lang="ts">
  import {onClickOutside} from '@vueuse/core';

  const navRef = ref(null);
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  onClickOutside(navRef, () => {
    isMenuOpen.value = false;
  });

  onMounted(() => {
    isMenuOpen.value = window.innerWidth > 1000;
  });
</script>

<style scoped></style>
