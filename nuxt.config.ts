// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: "https://www.ethan-schwartz.com/",
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: '2_y5E18D0HzFijy2j2g0OEVLR1K5mIAVl5MRUqioyvA',
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ethan-schwartz.com' }
      ]
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  modules: [
    "nuxt-aos",
    "vue3-carousel-nuxt",
    "@nuxtjs/sitemap",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
})