<template>
  <footer
    class="grid grid-rows-[min-content_1fr_min-content] bg-primary px-16 py-8 text-gray-100"
  >
    <nuxt-link
      to="/"
      class=""
    >
      <img
        src="images/footer_logo.svg"
        alt="Collab logo"
      />
    </nuxt-link>
    <div></div>
    <p class="pt-5 text-center text-3xl font-light tracking-[.15rem]">
      &copy; Collab {{ new Date().getFullYear() }}, All Rights Reserved
    </p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
