<template>
  <div
    class="grid min-h-screen grid-rows-[80px_1fr_minmax(347px,_max-content)] overflow-hidden"
  >
    <layout-header />
    <slot />
    <layout-footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
