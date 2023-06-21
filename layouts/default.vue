<template>
  <div>
    <header class="flex justify-between">
      <nuxt-link to="/"
        ><img
          src="header_logo.svg"
          alt="Collab logo"
        />
      </nuxt-link>
      <nav>hello</nav>
    </header>
    <slot />
    <footer></footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
