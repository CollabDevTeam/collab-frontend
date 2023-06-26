<template>
  <section
    class="grid min-h-[90vh] place-items-center bg-[url(images/home_hero.png)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="flex flex-col gap-6 bg-[#ffffff9c] px-5 py-5 text-center text-primary backdrop-blur-sm md:px-28 md:py-8"
    >
      <h1 class="text-xl md:text-2xl lg:text-4xl">
        Practice your skills. Collaborate. Gain experience.
      </h1>
      <p class="mx-auto max-w-[870px]">
        This is a platform for entry level candidates to collaborate together or
        short term projects on a volunteer basis. You’ll gain experience
      </p>
      <div
        class="mx-auto grid w-full max-w-[870px] grid-cols-1 gap-4 lg:grid-cols-2"
      >
        <div class="lg:justify-self-start">
          <button class="button-secondary uppercase">create a project</button>
        </div>
        <div class="lg:justify-self-end">
          <button class="button-primary uppercase">join a project</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
