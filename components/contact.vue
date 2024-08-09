<template>
  <section id="contact" class="h-screen flex items-center">
    <div class="mb-36 md:mb-0 grid md:grid-cols-2 px-4 py-16 md:p-16 gap-16">
      <div>
        <h5 data-aos="fade-up" class="type-secondary font-extrabold text-5xl">Let's chat</h5>
        <p :data-aos-delay="50" data-aos="fade-up" class="type-primary text-sm">
          If you liked what you read and you think I could be of service, please don't hesitate to reach out.
        </p>
      </div>
      <form
          action="https://formspree.io/f/mldrgrnb"
          method="POST"
          class="type-primary flex flex-col gap-6 max-w-md w-full"
      >
        <UInput v-model="form.name" :ui="{background: 'zinc'}" icon="i-heroicons-user" size="lg" color="gray" placeholder="Name" name="name" type="text" />
        <UInput v-model="form.email" :ui="{background: 'zinc'}" icon="i-heroicons-at-symbol" size="lg" color="gray" placeholder="Email" name="email" type="email" />
        <UTextarea v-model="form.message" :ui="{background: 'zinc'}" icon="i-heroicons-at-symbol" size="lg" color="gray" rows="6" placeholder="Message" name="message" />
        <button
            @click="submitForm"
            :disabled="!(form.name && form.email && form.message)"
            class="btn-primary"
            type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  message: "",
});

function submitForm () {
  form.name = '';
  form.email = '';
  form.message = '';
}
</script>