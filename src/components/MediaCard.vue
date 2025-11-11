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
  <div class="relative h-[320px] group select-none" draggable="false">
    <h3
      class="text-3xl absolute top-3/6 group-hover:opacity-100 min-wide:opacity-0 transition right-6 transform -translate-y-3/6"
    >
      {{ props.title }}
    </h3>

    <img
      class="w-full h-full select-none"
      :src="props.url"
      alt="no image"
      draggable="false"
    />

    <button
      class="bg-main group-hover:opacity-100 transition min-wide:opacity-0 absolute cursor-pointer text-secondary text-4xl flex justify-center items-center text-center w-20 h-20 bottom-0 right-0"
    >
      <font-awesome-icon class="relative left-1" icon="play" />
    </button>
  </div>
</template>
