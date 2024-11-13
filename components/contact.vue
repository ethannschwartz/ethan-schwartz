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
          id="contact-form"
          class="type-primary flex flex-col gap-6 max-w-md w-full"
      >
        <UInput
            v-model="form.name"
            :ui="{ background: 'zinc' }"
            :disabled="isLoading"
            icon="i-heroicons-user"
            size="lg"
            color="gray"
            placeholder="Name"
            name="name"
            type="text"
        />
        <UInput
            v-model="form.email"
            :ui="{ background: 'zinc' }"
            :disabled="isLoading"
            icon="i-heroicons-at-symbol"
            size="lg"
            color="gray"
            placeholder="Email"
            name="email"
            type="email"
        />
        <UTextarea
            v-model="form.message"
            :ui="{ background: 'zinc' }"
            :disabled="isLoading"
            icon="i-heroicons-at-symbol"
            size="lg"
            color="gray"
            rows="6"
            placeholder="Message"
            name="message"
        />
        <button
            :disabled="!(form.name && form.email && form.message) || isLoading"
            class="btn-primary"
            type="button"
            @click="submitForm"
        >
          <span v-if="isLoading">Submitting...</span>
          <span v-else>Submit</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const {sendMessage} = useContact();

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const isLoading = ref(false);

async function submitForm() {
  isLoading.value = true;
  try {
    await sendMessage(form);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    isLoading.value = false;
  }
}
</script>