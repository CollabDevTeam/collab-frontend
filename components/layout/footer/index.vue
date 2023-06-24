<template>
  <footer class="bg-primary font-light text-gray-100 md:text-3xl">
    <section
      class="mx-auto grid w-full max-w-main grid-rows-[min-content_1fr_min-content] gap-8 px-8 py-8"
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
      <div class="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-5">
        <nav>
          <ul class="flex flex-col gap-4">
            <li
              v-for="item in navigation"
              :key="item.id"
            >
              <nuxt-link :to="item.link">{{ item.label }}</nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="w-full place-self-center md:w-fit">
          <h4 class="font-medium uppercase tracking-[.15rem]">follow us</h4>
          <ul class="mt-6 flex gap-10">
            <li
              v-for="item in socialLinks"
              :key="item.src"
            >
              <nuxt-link :to="item.link"
                ><img
                  :src="item.src"
                  :alt="item.alt"
              /></nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center tracking-[.15rem]">
        &copy; Collab {{ new Date().getFullYear() }}, All Rights Reserved
      </p>
    </section>
  </footer>
</template>

<script setup lang="ts">
  import navigation from '../../../resources/navigation.json';
  import {type SocialLinks} from 'types';

  const socialLinks: SocialLinks[] = [
    {
      src: 'icons/facebook.svg',
      link: '#',
      alt: 'A link to owr facebook page',
    },
    {
      src: 'icons/instagram.svg',
      link: '#',
      alt: 'A link to our instagram page',
    },
    {
      src: 'icons/linkedin.svg',
      link: '#',
      alt: 'A link to our linkedin page',
    },
    {src: 'icons/medium.svg', link: '#', alt: 'A link to our medium page'},
  ];
</script>

<style scoped></style>
