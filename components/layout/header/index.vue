<template>
  <header
    class="mx-auto flex w-full max-w-[100vw] items-center justify-between gap-10 overflow-x-hidden px-8 lg:max-w-main"
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
      :is-mobile-view="isMobileView"
      @close-menu="toggleMenu"
    />
  </header>
</template>

<script setup lang="ts">
  import {onClickOutside} from '@vueuse/core';

  const navRef = ref(null);
  const isMenuOpen = ref(false);
  const isMobileView = ref(false);

  const toggleMenu = () => {
    if (isMobileView.value) {
      isMenuOpen.value = !isMenuOpen.value;
    }
  };

  onClickOutside(navRef, () => {
    if (isMobileView.value) {
      isMenuOpen.value = false;
    }
  });

  onMounted(() => {
    isMenuOpen.value = window.innerWidth > 1000;
    isMobileView.value = window.innerWidth < 1000;
    window.addEventListener('resize', () => {
      isMobileView.value = window.innerWidth < 1000;
    });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', () => {});
  });
</script>

<style scoped></style>
