<template>
  <nav
    class="absolute top-0 z-50 h-screen w-full max-w-[300px] bg-primary px-14 py-20 duration-300 ease-in-out lg:relative lg:h-fit lg:max-w-fit lg:bg-transparent lg:p-0"
    :class="[isMenuOpen ? 'right-0' : '-right-full']"
  >
    <button
      v-if="isMobileView"
      class="absolute right-[2rem] top-[1rem] text-gray-100"
      @click="$emit('close-menu')"
    >
      <Icon
        name="streamline:interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward"
        size="2rem"
      />
    </button>
    <ul
      class="relative flex w-full flex-col items-end gap-5 text-gray-100 lg:flex-row lg:gap-10 lg:text-black"
    >
      <li
        v-for="item in filteredNavigation"
        :key="item.label"
      >
        <nuxt-link
          :to="item.link"
          class="whitespace-nowrap"
          :activeClass="isMobileView ? 'dark-active-link' : 'light-active-link'"
          >{{ item.label }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import navigation from '../../../resources/navigation.json';
  const user = ref({name: 'Jack Landma'});
  const jwt = useCookie('jwt');

  defineProps<{
    isMenuOpen: boolean;
    isMobileView: boolean;
  }>();

  const filteredNavigation = computed(() => {
    return navigation.map((item) => {
      if (item.id === 'user') {
        return jwt.value
          ? {
              id: 'user',
              label: user.value.name,
              link: '/user-area',
            }
          : {id: 'user', label: 'Sign up / Log in', link: '/sign-up'};
      }
      return item;
    });
  });
</script>

<style scoped></style>
