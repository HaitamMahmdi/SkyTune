<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";
</script>
<template>
  <div class="container my-40">
    <div class="text-center">
      <h2 class="text-5xl uppercase mb-6">
        get the sky<span class="text-main">tune</span>
      </h2>
      <p class="text-2xl capitalize">
        Experience music <br />
        like never before-smooth playback
      </p>
      <div class="text-5xl mt-3">
        <FontAwesomeIcon class="mr-4" :icon="faGooglePlay" />
        <FontAwesomeIcon :icon="faAppStore" />
      </div>
    </div>
    <div
      class="grid min-sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] mt-36 gap-6"
    >
      <div
        class="bg-secondary-bg-color max-sm:mx-auto max-sm:w-[300px] px-2.5 flex justify-center aspect-square rounded-4xl items-center"
        v-for="x in [
          `Offline playback
 anytime`,
          `Smart song recommendation`,
          `High-quality audio`,
          `Easy playlist creation and editing`,
          `Available On Your Favorite Platforms`,
          `Start Listening in Seconds`,
        ]"
        :key="x"
      >
        <p class="min-sm:text-3xl text-2xl text-center uppercase">{{ x }}</p>
      </div>
    </div>
  </div>
</template>
