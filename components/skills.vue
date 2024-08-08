<template>
  <section id="skills" class="scroll-mt-12 p-4 md:px-16 md:py-8">
    <h4 data-aos="fade-up" class="font-bold type-secondary text-5xl my-8">Skills</h4>
    <article class="grid grid-cols-1 md:grid-cols-2">
      <div class="mb-4" data-aos="fade-up" v-for="category in skillsArray">
        <h5 class="mb-4 font-bold text-3xl type-secondary">{{ category.title }}</h5>
        <ul>
          <li data-aos="fade-up" class="flex items-center gap-2 type-primary" v-for="skill in category.skills">
            <!--            <i class="text-base" :class="skill.logo"></i>-->
                        <i class="text-sm fi fi-rr-check"></i>
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script setup>
const skillsArray = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: "fi fi-brands-js" },
      { name: "TypeScript", logo: "fi fi-brands-typescript" },
      { name: "PHP", logo: "fi fi-brands-php" },
      { name: "Python", logo: "fi fi-brands-python" },
      { name: "SQL", logo: "fi fi-brands-mysql" },
      { name: "HTML5", logo: "fi fi-brands-html5" },
      { name: "CSS", logo: "fi fi-brands-css3" }
    ]
  },
  {
    title: "Frameworks and Libraries",
    skills: [
      { name: "Vue.js", logo: "fi fi-rr-check" },
      { name: "Nuxt.js", logo: "fi fi-rr-check" },
      { name: "Next.js", logo: "fi fi-rr-check" },
      { name: "React", logo: "fi fi-rr-check" },
      { name: "Angular", logo: "fi fi-rr-check" },
      { name: "Laravel", logo: "fi fi-rr-check" },
      { name: "Inertia.js", logo: "fi fi-rr-check" },
      { name: "Redux / NgRx / NgXs / RxJS", logo: "fi fi-rr-check" },
      { name: "TailwindCSS", logo: "fi fi-rr-check" },
      { name: "Node.js", logo: "fi fi-brands-node-js" }
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: ".NET Entity Framework", logo: "fi fi-rr-check" },
      { name: "REST APIs", logo: "fi fi-rr-api" },
      { name: "AWS", logo: "fi fi-rr-check" },
      { name: "CI/CD", logo: "fi fi-rr-network-cloud" }
    ]
  },
  {
    title: "Tools and Platforms",
    skills: [
      { name: "Github", logo: "fi fi-brands-github" },
      { name: "Jira / Atlassian", logo: "fi fi-rr-check" },
      { name: "Figma", logo: "fi fi-brands-figma" },
      { name: "Cloudinary", logo: "fi fi-rr-check" },
      { name: "SEO", logo: "fi fi-rr-discover" },
      { name: "Google Search Console", logo: "fi fi-brands-google" },
      { name: "OpenAI GPT", logo: "fi fi-rr-check" },
      { name: "Stripe", logo: "fi fi-brands-stripe" }
    ]
  },
  {
    title: "Development Techniques and Practices",
    skills: [
      { name: "MVC Architecture", logo: "fi fi-rr-check" },
      { name: "SPA", logo: "fi fi-rr-check" },
      { name: "Agile Development", logo: "fi fi-rr-check" },
      { name: "Asynchronous functions", logo: "fi fi-rr-check" },
      { name: "UX/UI Design", logo: "fi fi-rr-check.png" },
      { name: "Real-time data fetching", logo: "fi fi-rr-check" },
      { name: "Performance optimization", logo: "fi fi-rr-check" },
      { name: "Technical SEO", logo: "fi fi-rr-check.png" },
      { name: "Dynamic content handling", logo: "fi fi-rr-check" },
      { name: "Web Scraping", logo: "fi fi-rr-check" },
    ]
  },
  {
    title: "Database Management",
    skills: [
      { name: "MySQL", logo: "fi fi-brands-mysql" },
      { name: "PostgreSQL", logo: "fi fi-brands-postgre" }
    ]
  }
];

// Note: Replace the placeholder URLs (https://path-to-logo) with the actual URLs to the logos.

</script>