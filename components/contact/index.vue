<template>
  <section id="contact" class="h-screen flex items-center">
    <div class="mb-36 md:mb-0 grid md:grid-cols-2 w-full px-4 py-16 md:p-16 gap-16">
      <div>
        <h5 data-aos="fade-up" class="type-secondary font-extrabold text-5xl">{{ $t('Let\'s chat') }}</h5>
        <p :data-aos-delay="50" data-aos="fade-up" class="type-primary text-sm">
          {{ $t("If you liked what you read and you think I could be of service, please don't hesitate to reach out.") }}
        </p>
      </div>
      <form
          id="contact-form"
          class="type-primary flex flex-col gap-6 max-w-full md:max-w-md lg:max-w-lg mx-auto w-full"
      >
        <UInput
            v-model="form.name"
            :ui="{ background: 'zinc' }"
            :disabled="isLoading"
            icon="i-heroicons-user"
            size="lg"
            color="gray"
            :placeholder="$t('Name')"
            name="name"
            type="text"
            pattern="[A-Za-z]{1,100}"
            required
        />
        <UInput
            v-model="form.email"
            :ui="{ background: 'zinc' }"
            :disabled="isLoading"
            icon="i-heroicons-at-symbol"
            size="lg"
            color="gray"
            :placeholder="$t('Email')"
            name="email"
            type="email"
            required
        />
        <UTextarea
            v-model="form.message"
            :ui="{ background: 'zinc' }"
            :disabled="isLoading"
            icon="i-heroicons-at-symbol"
            size="lg"
            color="gray"
            rows="6"
            :placeholder="$t('Message')"
            name="message"
            required
        />
        <button
            :disabled="!(form.name && form.email && form.message) || isLoading"
            class="btn-primary"
            type="button"
            @click="submitForm"
        >
          <TransitionGroup
              name="switch-vertical"
              tag="div"
              class="flex items-center"
          >
            <span key="a" v-if="isLoading" class="w-full flex justify-center items-center">
              <LoadingSpinner class="dark:invert" />
            </span>
            <span key="b" v-else class="w-full flex justify-center items-center">{{ $t('Submit') }}</span>
          </TransitionGroup>
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

<style>
.switch-vertical-move,
.switch-vertical-enter-active,
.switch-vertical-leave-active {
  transition: all .15s ease-in-out;
}

.switch-vertical-enter-from,
.switch-vertical-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

.switch-vertical-leave-active {
  position: absolute;
  overflow:hidden;
  display: flex;
  align-items: center;
}
</style>