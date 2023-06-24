<template>
  <nav
    class="z-100 absolute h-screen w-full max-w-[300px] bg-primary p-16 duration-300 ease-in-out lg:static lg:h-auto lg:max-w-fit lg:bg-transparent"
    :class="[isMenuOpen ? 'right-0 top-0' : '-right-full top-0']"
  >
    <ul
      class="relative flex w-full flex-col items-end gap-5 text-gray-100 lg:flex-row lg:gap-10 lg:text-black"
    >
      <button
        v-if="isMobileView"
        class="absolute -right-[3rem] -top-[3rem]"
        @click="$emit('close-menu')"
      >
        <Icon
          name="streamline:interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward"
          size="2rem"
        />
      </button>
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
  const isMobileView = ref();

  defineProps<{
    isMenuOpen: boolean;
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

  onMounted(() => {
    isMobileView.value = window.innerWidth < 1000;
    window.addEventListener('resize', () => {
      isMobileView.value = window.innerWidth < 1000;
    });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', () => {});
  });
</script>

<style scoped></style>
