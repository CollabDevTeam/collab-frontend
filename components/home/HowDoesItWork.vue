<template>
  <section class="px-5 py-14">
    <div class="mx-auto max-w-main text-center text-primary">
      <h2
        class="mx-auto w-fit border-b-[3px] border-primary text-2xl md:text-4xl"
      >
        How does it work?
      </h2>
      <div
        v-for="item in sections"
        :key="item.subtitle.text"
        class="border-primary first-of-type:border-b-[3px] first-of-type:pb-16"
      >
        <p class="my-8 text-lg md:text-xl">
          <Icon :name="item.subtitle.icon" />
          {{ item.subtitle.text }}
        </p>
        <div class="grid gap-12 md:grid-cols-3 md:gap-0">
          <div
            v-for="(card, index) in item.cards"
            :key="card.title"
            class="relative mx-auto md:px-6 lg:px-12"
          >
            <Icon
              v-if="index !== item.cards.length - 1"
              name="material-symbols:play-arrow-rounded"
              class="absolute right-1/2 top-full h-12 w-12 translate-x-1/2 translate-y-1/4 rotate-90 md:right-0 md:top-1/2 md:h-10 md:w-10 md:-translate-y-1/2 md:rotate-0 lg:h-14 lg:w-14"
              :class="item.iconColor"
            />
            <img
              :src="card.image"
              alt=""
              class="mx-auto"
            />
            <h3 class="mt-8 uppercase text-secondary lg:text-xl">
              {{ card.title }}
            </h3>
            <p class="text- mt-2 text-sm lg:text-md">{{ card.text }}</p>
          </div>
        </div>
        <button
          :class="item.button.styles"
          class="mt-16"
        >
          {{ item.button.text }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const sections = [
    {
      subtitle: {
        text: 'You have an idea? You need a team of people to help you!',
        icon: 'material-symbols:lightbulb-outline-rounded',
      },
      cards: [
        {
          image: '/images/home_2_1.png',
          title: 'POST A PROJECT',
          text: 'you have an idea for a project? You need people to help you make it a reality?',
        },
        {
          image: '/images/home_2_2.png',
          title: 'BUILD A TEAM',
          text: 'Assemble a team of skilled professionals to make your idea into a product',
        },
        {
          image: '/images/home_2_3.png',
          title: 'COLLABORATE',
          text: 'Start working together and learn from each other as you make your idea into a product',
        },
      ],
      iconColor: 'text-secondary',
      button: {
        text: 'CREATE A PROJECT',
        styles: 'button-secondary',
      },
    },
    {
      subtitle: {
        text: 'You have skills? You’d like to collaborate on a project?',
        icon: 'material-symbols:settings-outline-rounded',
      },
      cards: [
        {
          image: '/images/home_3_1.png',
          title: 'SELECT A PROJECT',
          text: 'Browse the many interesting projects posted and select what you’d like to work on',
        },
        {
          image: '/images/home_3_2.png',
          title: 'JOIN A TEAM',
          text: 'Apply to join other skilled professionals and become a part of the team',
        },
        {
          image: '/images/home_3_3.png',
          title: 'COLLABORATE',
          text: 'Start working together and learn from each other as you make your idea into a product',
        },
      ],
      iconColor: 'text-primary',
      button: {
        text: 'JOIN A PROJECT',
        styles: 'button-primary',
      },
    },
  ];
</script>

<style scoped></style>
