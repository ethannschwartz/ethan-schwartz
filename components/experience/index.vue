<template>
  <section id="experience" class="scroll-mt-12 h-auto px-4 py-16 md:p-16">
    <h4 data-aos="fade-up" class="font-bold type-secondary text-5xl my-8">{{ $t('Experience') }}</h4>
    <ul class="gap-24 md:gap-64 grid grid-cols-1">
      <li v-for="(experience, i) in experiences" class="gap-16 grid grid-cols-1 md:grid-cols-2">
        <div
            data-aos="fade-up"
            :data-aos-delay="100 * (i+1)"
            :class="i % 2 === 0 ? 'md:order-1': ''"
        >
          <div class="mb-4">
            <h5 class="w-fit font-bold type-primary group flex items-center gap-2">
              <UTooltip
                  class="flex items-center"
                  :text="`${$t('Visit')} ${experience.title}`"
                  :popper="{
                    placement: 'right'
                  }"
              >
                <a :href="experience.link" class="text-3xl group-hover:underline underline-offset-4">{{ $t(experience.title) }}</a>
              </UTooltip>
            </h5>
            <p class="type-secondary text-sm">{{ $t(experience.description) }}</p>
          </div>
          <div data-aos="fade-up">
            <ul class="grid grid-cols-1 lg:grid-cols-2">
              <li
                  data-aos="fade-up"
                  class="type-primary"
                  v-for="item in experience.achievements"
              >
                {{ $t(item) }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Carousel :touch-drag="true" :items-to-show="1" :autoplay="2000" :pause-autoplay-on-hover="true" :wrap-around="true">
            <Slide v-for="slide in experience.images" :key="slide">
              <img :src="slide" alt="">
            </Slide>
          </Carousel>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import seclockImage3 from "assets/images/seclock/img_2.png";
import seclockImage2 from "assets/images/seclock/img_1.png";
import seclockImage1 from "assets/images/seclock/img.png";
import seclockImage4 from "assets/images/seclock/img_3.png";
import semestrImage4 from "assets/images/semestr/img_3.png";
import semestrImage2 from "assets/images/semestr/img_1.png";
import semestrImage3 from "assets/images/semestr/img_2.png";
import newSemestrLanding from "assets/images/semestr/img_5.png";
import newSemestrPage from "assets/images/semestr/img_4.png";


const seclockImages = [
  seclockImage1,
  seclockImage2,
  seclockImage3,
  seclockImage4,
];

const semestrImages = [
  newSemestrLanding,
  newSemestrPage,
  semestrImage2,
  semestrImage3,
  semestrImage4,
];

const experiences = [
  {
    title: "SECLOCK",
    link: "https://seclock.com",
    images: seclockImages,
    description: "Full stack developer",
    achievements: [
      "Vue",
      "Laravel",
      "TailwindCSS",
      "Inertia.js",
      "MySQL",
      "MVC Architecture",
      "RESTful API",
      "UI/UX Design",
      "Figma",
      "Cloudinary",
      "Agile (Jira/Atlassian)",
      "Debounce",
      "Asynchronous Functions",
      "Caching",
    ],
  },
  {
    title: "Semestr",
    link: "https://semestr.io",
    images: semestrImages,
    description: "Full stack developer  •  Team Lead  •  Founder",
    achievements: [
      "Angular",
      "TailwindCSS",
      "TypeScript",
      ".NET Entity Framework",
      "ES6",
      "Redux",
      "RxJS",
      "NgRx/NgXs Store",
      "AWS",
      "OpenAI GPT",
      "SEO",
      "HTML5",
      "JSON-LD",
    ],
  },
];
</script>