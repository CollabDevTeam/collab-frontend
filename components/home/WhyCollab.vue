<template>
  <section class="mx-auto max-w-main">
    <h2>Why Collab?</h2>
    <div
      class="place-items-center text-primary flex flex-wrap justify-center"
    >
      <div
        v-for="item in cards"
        :key="item.title"
        class="max-w-[360px] min-h-[260px] flex flex-col justify-between items-center p-6 text-center"
      >
        <img
          :src="item.image"
          :alt="item.alt"
        />
        <h4 class="text-xl">{{ item.title }}</h4>
        <p class="font-light">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const cards = [
    {
      image: '/icons/users.svg',
      alt: '',
      title: 'WORK WITH A TEAM',
      text: 'Learn how to collaborate with other professionals',
    },
    {
      image: '/icons/skills-palete.svg',
      alt: '',
      title: 'GAIN EXPERIENCE',
      text: 'Develop your skills and get real experience',
    },
    {
      image: '/icons/check-list.svg',
      alt: '',
      title: 'GET READY TO BE HIRED',
      text: 'Value this experience when interviewing for your next job',
    },
    {
      image: '/icons/notebook.svg',
      alt: '',
      title: 'ADD PROJECTS TO YOUR PORTFOLIO',
      text: 'Expand your portfolio with the projects realized on Collab',
    },
    {
      image: '/icons/stack.svg',
      alt: '',
      title: 'LEARN FROM OTHER PROFESSIONALS',
      text: 'Get a chance to work with other professionals and learn from them',
    },
  ];
</script>

<style scoped></style>
