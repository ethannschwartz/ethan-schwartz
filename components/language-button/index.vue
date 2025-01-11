<template>
  <div @mouseleave="isVisible = false" data-aos="fade-down" class="w-fit type-primary">
    <div class="relative flex items-center">
      <button @mouseover="isVisible = true" @focus="isVisible = true" class="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400">
        <i class="fi fi-rr-earth-americas"></i>
      </button>
      <div :class="isVisible ? 'opacity-100' : 'translate-y-1 opacity-0 pointer-events-none'" class="duration-150 type-secondary absolute top-full -right-1/2 pt-2 w-fit">
        <div class="bg-white dark:bg-zinc-800 p-2 rounded-md border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-2xl">
          <ul>
            <li v-for="language in languages">
              <button
                  @click="updateLanguage(language.value)"
                  :class="locale === language.value ? 'text-emerald-600 dark:text-emerald-400' : ''"
                  class="w-full px-3 py-1 text-sm hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:active:bg-zinc-700 dark:hover:text-white active:bg-zinc-200 rounded"
              >
                {{ language.label }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { setLocale, locale } = useI18n();

const isVisible = ref(false);

const updateLanguage = (language) => {
  setLocale(language);
  localStorage.setItem('language', language);
};

onMounted(() => {
  let languagePreference = localStorage.getItem('language');
  if(languagePreference !== 'en') {
    setLocale(languagePreference);
  }
});

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Español",
    value: "es",
  },
  {
    label: "Português",
    value: "pt",
  },
  {
    label: "עברית",
    value: "he",
  },
];
</script>