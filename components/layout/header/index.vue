<template>
  <header
    class="flex items-center justify-between gap-10 overflow-x-hidden px-8 py-6 lg:px-16"
  >
    <nuxt-link to="/"
      ><img
        src="images/header_logo.svg"
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
      class=""
      :is-menu-open="isMenuOpen"
      @close-menu="toggleMenu"
    />
  </header>
</template>

<script setup lang="ts">
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  onMounted(() => {
    isMenuOpen.value = window.innerWidth > 1000;
  });
</script>

<style scoped></style>
