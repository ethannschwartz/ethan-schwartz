<template>
  <section id="about" class="scroll-mt-24 md:-scroll-mt-8 type-primary grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 px-4 md:px-16 h-screen">
    <div data-aos="fade-up" class="order-2 md:order-1">
      <pre  class="text-3xl font-bold mb-4">Hello World</pre>
      <p>I am a Full Stack Developer based in Tel Aviv, Israel. With over three years of professional experience, I've honed my skills in creating robust, scalable, and intuitive web and mobile applications. I thrive on solving complex problems with elegant solutions, optimizing performance, and ensuring seamless user experiences. Passionate about continuous learning and staying at the forefront of technological advancements, I am committed to delivering high-quality code and innovative solutions that drive success for the projects I undertake.</p>
    </div>
    <img
        data-aos="flip-right"
        data-aos-delay="200"
        class="order-1 md:order-2 mx-auto p-12 md:p-0 max-w-xs rounded-full overflow-hidden"
        :src="profileImage"
        alt="profile image"
    />
  </section>
</template>

<script setup>
const profileImage = 'https://media.licdn.com/dms/image/D4D03AQHWvWB5AuYzHw/profile-displayphoto-shrink_800_800/0/1723111948384?e=1728518400&v=beta&t=aJaog02H0p00TAjPoIdxEYLdqQUE-mDbo_Mq-VULl6o';

</script>