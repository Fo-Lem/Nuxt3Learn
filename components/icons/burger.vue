<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    default: 'box',
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  iconColor: {
    type: String,
    default: 'currentColor',
  },
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    fill="none"
    stroke-width="1.5"
    stroke="currentColor"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
    aria-hidden="true"
  >

    <title
      :id="iconName"
      lang="ru"
    >{{ iconName }} icon</title>
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

  </svg>
</template>
