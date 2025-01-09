<template>
  <section
      :dir="locale === 'he' ? 'rtl' : 'ltr'"
      :class="locale !== 'he' ? '!text-left' : '!text-right'"
      class="bg-zinc-tier-1"
  >
    <Hero />
    <About />
    <Skills />
    <Experience />
    <OpenSource />
    <Contact />
<!--    for toasts-->
    <UNotifications />
  </section>
</template>

<script setup>
const { locale } = useI18n();

useSeoMeta({
  title: "Ethan Schwartz | Software Developer",
  description: "Full stack software developer living in Tel Aviv-Yafo. Experienced in Angular, Vue, React, Nuxt.js, Next.js, PHP, Laravel, SQL, and more.",
  keywords: "Software engineer, software developer, full stack developer, front end developer, vue developer, laravel developer, angular developer, experienced programmer, SEO specialist",
});
</script>