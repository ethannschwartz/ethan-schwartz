<template>
  <section ref="open-source" id="open-source" class="type-primary mt-20 scroll-mt-20 md:scroll-mt-4w-screen h-auto p-4 md:p-16">
    <div class="flex w-full items-center justify-start md:justify-center text-center">
      <i class="fi fi-brands-github text-6xl"></i>
    </div>
    <h4 data-aos="fade-right" class="text-left md:text-center font-bold type-secondary text-5xl my-8">Open Source Development</h4>
    <p data-aos="fade-right" data-aos-delay="50" class="text-xl font-extralight text-left md:text-center mb-8">As an open source developer, I am constantly expanding and refining my skillset. My projects have played a crucial role in enhancing my expertise and contributing to the broader tech community.</p>
    <div class="text-base flex items-center justify-between max-w-3xl mx-auto rounded-md bg-black text-white p-4">
      <div>
        <span class="font-mono"><span class="text-yellow-600">$</span> {{ displayedText }}</span><span class="font-mono" v-if="cursorVisible">|</span>
      </div>
      <UTooltip :popper="{ placement: 'right' }" :text="iconClass === 'fi fi-rr-check text-green-500' ? 'Copied!' :'Copy to clipboard'">
        <button @click="copyToClipboard" class="text-white opacity-75 hover:opacity-100 p-2 rounded-md hover:bg-zinc-800">
          <i :class="iconClass"></i>
        </button>
      </UTooltip>
    </div>
    <div id="image" class="h-[500px] duration-150 max-w-3xl mx-auto text-center mt-12">
      <img
          v-if="imageVisible"
          :src="currentImage"
          data-aos="zoom-out"
          data-aos-delay="200"
          alt="Description of the image"
          class="shadow-2xl shadow-teal-200/25 dark:shadow-teal-200/50 w-full max-w-full mx-auto rounded-2xl overflow-hidden"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import nextImage from "../assets/images/open-source/next-img.png";
import nuxtImage from "../assets/images/open-source/nuxt-img.png";
import portfolioImage from "../assets/images/open-source/portfolio-img.png";

const displayedText = ref('');
const cursorVisible = ref(true);
const imageVisible = ref(false);
const baseText = "git clone https://github.com/ethannschwartz/";
const variations = ["next.js-template.git", "nuxt-template.git", "ethan-schwartz.git"];

const images = [
  nextImage,
  nuxtImage,
  portfolioImage,
];
const currentImage = ref(images[0]);

let variationIndex = 0;
let typingInterval;
let backspaceInterval;

const iconClass = ref('fi fi-rr-copy'); // Default icon class

onMounted(() => {
  const section = document.querySelector('#open-source');

  if (section) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && displayedText.value === '') {
        startTypingCycle();
        setInterval(() => {
          cursorVisible.value = !cursorVisible.value;
        }, 500);
      }
    }, { threshold: 0.5 });

    observer.observe(section);
  } else {
    console.error('Section not found');
  }
});

function startTypingCycle() {
  typeText(baseText, () => {
    cycleVariations();
  });
}

function typeText(text, callback) {
  let i = displayedText.value.length;
  typingInterval = setInterval(() => {
    if (i < text.length) {
      displayedText.value += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      callback();
    }
  }, 20);
}

function backspaceText(callback) {
  backspaceInterval = setInterval(() => {
    if (displayedText.value.length > baseText.length) {
      displayedText.value = displayedText.value.slice(0, -1);
    } else {
      clearInterval(backspaceInterval);
      callback();
    }
  }, 20);
}

function cycleVariations() {
  backspaceText(() => {
    typeText(baseText + variations[variationIndex], () => {
      currentImage.value = images[variationIndex]; // Change the image based on the variation
      imageVisible.value = true; // Show image after each variation is typed
      variationIndex = (variationIndex + 1) % variations.length;
      let imageElement = document.getElementById("image");
      imageElement.classList.add('scale-95');
      setTimeout(() => {
        imageElement.classList.remove('scale-95');
      }, 100)
      setTimeout(cycleVariations, 5000); // Delay before the next cycle
    });
  });
}

function copyToClipboard() {
  navigator.clipboard.writeText(displayedText.value).then(() => {
    iconClass.value = 'fi fi-rr-check text-green-500'; // Change to checkmark icon
    setTimeout(() => {
      iconClass.value = 'fi fi-rr-copy'; // Revert to original copy icon after 4 seconds
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
</script>
