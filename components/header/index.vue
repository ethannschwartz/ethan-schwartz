<template>
  <header class="bg-zinc-tier-1 backdrop-blur-sm z-40 flex items-center justify-between fixed top-0 left-0 right-0 py-4 px-4 md:py-6 md:px-16">
    <div data-aos="fade" data-aos-delay="100" class="z-10 flex items-center">
      <div class="text-emerald-600 block items-center">
        <div class="!font-mono">
          {{ $t('Ethan Schwartz') }}
          <span class="flex items-center text-xs type-secondary font-mono">
            <UTooltip :text="$t('Call me')" class="flex items-center">
              <a class="flex gap-1.5 items-center font-mono text-xs" href="tel:+972 053-324-4272">053-324-4272 <i class="fi fi-brands-whatsapp"></i></a>
            </UTooltip>
          </span>
        </div>
      </div>
    </div>
    <div data-aos="fade-down" v-if="scrollPosition > 10" class="hidden lg:flex fixed top-0 left-0 right-0 h-fit my-20 items-center justify-center">
      <button
          @click="scrollToTop()"
          :class="isClicked ? 'opacity-0 scale-50' : ''"
          class="duration-150 flex gap-1 items-center rounded-full bg-black dark:bg-white text-white dark:text-black py-1 px-5 text-sm"
      >
        {{ $t('Scroll to top') }}
        <i class="fi fi-rr-arrow-up flex items-center"></i>
      </button>
    </div>
    <div class="flex gap-4 items-center">
      <button @click="toggleDarkMode()" class="flex items-center lg:hidden">
        <i v-if="isDark" class="fi fi-rr-sun"></i>
        <i v-else class="fi fi-rr-moon"></i>
      </button>
      <LanguageButton class="lg:hidden" />
      <a
          href="/assets/files/ethan-schwartz-resume.pdf"
          class="text-xs font-mono flex lg:hidden items-center gap-1 border border-black dark:border-white bg-transparent text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-4 py-1"
      >
        <i class="fi fi-rr-resume"></i>
        {{ $t('resume') }}
      </a>
      <button @click="toggleMobileMenu()" class="type-primary flex flex-col gap-1.5 items-center lg:hidden">
        <i class="fi fi-rr-grip-lines"></i>
      </button>
    </div>
    <ul class="hidden lg:flex items-center gap-4">
      <LanguageButton data-aos="fade-down" class="type-primary"  />
      <li data-aos="fade-down" class="type-primary hover:text-emerald-600 dark:hover:text-emerald-400">
        <UTooltip
            :text="isDark ? $t('Turn dark mode off') : $t('Turn dark mode on')"
            class="flex items-center"
        >
          <button @click="toggleDarkMode()" class="flex items-center">
            <i v-if="isDark" class="fi fi-rr-sun"></i>
            <i v-else class="fi fi-rr-moon"></i>
          </button>
        </UTooltip>
      </li>
      <li
          v-for="(section, i) in sections"
          class="type-primary hover:text-emerald-600 dark:hover:text-emerald-400"
          data-aos="fade-down"
          :data-aos-delay="100 + (i * 50)"
      >
        <a :href="'#'+section" class="font-mono text-sm">{{ $t(section) }}</a>
      </li>
      <li data-aos="fade-down" :data-aos-delay="100 + (sections.length * 50)">
        <UTooltip :text="$t('Check out my resume')" :open-delay="500" class="flex items-center">
          <a
              target="_blank"
              href="/assets/files/ethan-schwartz-resume.pdf"
              class="text-xs font-mono hidden md:flex items-center gap-1 border border-black dark:border-white bg-transparent text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-4 py-1"
          >
            <i class="fi fi-rr-resume"></i>
            <span class="font-mono hidden lg:block">{{ $t('resume') }}</span>
          </a>
        </UTooltip>
      </li>
    </ul>
    <Transition name="slide-left">
      <div v-if="isMenuSeen" class="bg-white dark:bg-zinc-900 py-8 px-4 md:p-16 fixed inset-0 h-screen w-screen z-50">
        <div class="type-primary mb-4 flex justify-end items-center">
          <button>
            <i @click="toggleMobileMenu()" class="fi fi-rr-cross"></i>
          </button>
        </div>
        <ul class="flex flex-col w-full gap-2">
          <li
              v-for="(section, i) in sections"
              data-aos="fade-left"
              :data-aos-delay="100 + (i * 50)"
              class="block type-primary w-full"
          >
            <a
                @click="isMenuSeen = false"
                :href="'#'+section"
                class="capitalize font-medium block active:bg-zinc-100 dark:active:bg-zinc-800 p-2 rounded-md w-full"
            >
              {{ $t(section) }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
//dark mode
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
}

const sections = [
    "about",
    "skills",
    "experience",
    "open-source",
    "contact",
];

const isMenuSeen = ref(false);

const toggleMobileMenu = () => {
  isMenuSeen.value = !isMenuSeen.value;
}

const scrollPosition = ref(0);
const isClicked = ref(false);

onMounted(() => {
  scrollPosition.value = scrollY;
  window.addEventListener("scroll", (event) => {
    scrollPosition.value = scrollY;
  });
});

const scrollToTop = () => {
  isClicked.value = true;
  window.scrollTo(0,0);
  setTimeout(() => {
    isClicked.value = false;
  },1000);
}
</script>

<style scoped>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.15s ease-in-out;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-to, .slide-left-leave-from {
  transform: translateX(0);
}
</style>
