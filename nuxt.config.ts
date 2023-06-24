// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: ['300', '400', '500', '700'],
          download: true,
          inject: true,
        },
      },
    ],
    'nuxt-icon',
  ],
});
