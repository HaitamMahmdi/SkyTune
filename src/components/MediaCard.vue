<script setup>
/**
 * TODO: Add a second Type for the media card
 *
 */
const props = defineProps({
  title: String,
  url: String,
  subTitle: String,
});
</script>
<template>
  <div class="relative min-w-96 h-96 m-5 group">
    <h3
      class="text-4xl absolute top-3/6 group-hover:opacity-100 opacity-0 transition right-4 transform -translate-y-3/6"
    >
      {{ props.title }}
    </h3>

    <img class="w-full h-full rounded-full" :src="props.url" alt="no image" />

    <button
      class="bg-main group-hover:opacity-100 transition opacity-0 absolute cursor-pointer text-secondary text-4xl flex justify-center items-center text-center w-20 h-20 rounded-full top-3/4 right-0"
    >
      <font-awesome-icon class="relative left-1" icon="play" />
    </button>
  </div>
</template>
