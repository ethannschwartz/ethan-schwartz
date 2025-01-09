<template>
  <span class="loader flex items-center justify-center"></span>
</template>

<script setup></script>

<style scoped>
.loader {
  width: 24px;
  height: 24px;
  border: 3px dotted #ffffff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>