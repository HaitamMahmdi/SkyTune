<script setup>
/**
 * TODO: Add a second Type for the media card
 *
 */
const props = defineProps({
  title: String,
  url: String,
  subTitle: String,
  type: {
    type: String,
    required: true,
  },
  albumUrl: String,
  streams: String,
  customClass: String,
});
</script>
<template>
  <div
    v-if="props.type === 'mid'"
    :class="[props.class]"
    id="MediaCard"
    class="relative h-[320px] group select-none"
    draggable="false"
  >
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
  <div
    :class="[props.customClass]"
    id="MediaCard"
    class="relative group cursor-pointer"
    v-if="props.type === 'midX'"
  >
    <img class="w-full h-full" :src="props.albumUrl" alt="" />
    <div
      class="absolute w-fit text-center opacity-0 transition duration-200 group-hover:opacity-100 top-3/6 left-3/6 transform -translate-3/6 select-none"
    >
      <div class="rounded-full relative">
        <img
          :src="props.url"
          alt="no image"
          class="rounded-full w-32 h-32 mx-auto"
          draggable="false"
        />
        <img
          class="absolute right-0 top-3/4"
          src="/public/assets/icons/Verified Account.svg"
          alt=""
        />
      </div>
      <p class="text-bold mt-10 text-[18px]">
        {{ props.streams }} monthly active listeners
      </p>
    </div>
  </div>
  <div
    :class="[props.customClass]"
    id="MediaCard"
    class="relative group cursor-pointer"
    v-if="props.type === 'lg'"
  >
    <img class="w-full h-full" :src="props.albumUrl" alt="" />
    <div
      class="absolute w-fit text-center opacity-0 transition duration-200 group-hover:opacity-100 top-3/6 left-3/6 transform -translate-3/6 select-none"
    >
      <div class="relative w-fit mx-auto">
        <img
          class="absolute right-0 top-3/4"
          src="/public/assets/icons/Verified Account.svg"
          alt=""
        />
        <img
          :src="props.url"
          alt="no image"
          class="rounded-full w-32 h-32 mx-auto"
          draggable="false"
        />
      </div>

      <p class="text-2xl mt-5">{{ props.streams }} monthly active listeners</p>
    </div>
  </div>
</template>
