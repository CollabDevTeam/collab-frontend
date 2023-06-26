<template>
  <div
    class="relative grid min-h-screen grid-rows-[80px_1fr_minmax(347px,_max-content)] overflow-x-hidden overflow-y-scroll"
  >
    <layout-header />
    <slot />
    <layout-footer />
  </div>
</template>

<script setup lang="ts"></script>
