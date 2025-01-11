<template>
  <section
      :dir="locale === 'he' ? 'rtl' : 'ltr'"
      :class="locale !== 'he' ? '!text-left' : '!text-right'"
      class="bg-zinc-tier-1"
  >
    <Hero class="section" />
    <About class="section" />
    <Skills class="section" />
    <Experience class="section" />
    <OpenSource class="section" />
    <Contact class="section" />
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

// const activeLink = ref('');
const pageSections = ref([]);
const activeLink = useState('activeLink', () => "");

const updateActiveLink = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeLink.value = entry.target.id;
    }
  });
};

let observer;

onMounted(() => {
  pageSections.value = Array.from(document.querySelectorAll('.section'));
  observer = new IntersectionObserver(updateActiveLink, {
    root: null, // viewport
    threshold: 0.5, // 50% of the section is in view
  });

  pageSections.value.forEach((section) => observer.observe(section));

});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>