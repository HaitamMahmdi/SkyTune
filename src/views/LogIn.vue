<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
</script>
<template>
  <div class="container my-40 max-md:mt-60">
    <h2 class="text-7xl max-md:text-5xl mb-28 w-fit uppercase mx-auto">
      <span class="text-main">log in</span>
    </h2>
    <form action="" @submit.prevent class="max-w-[720px] mx-auto px-2.5">
      <input
        type="text"
        class="min-md:w-[36.31rem] w-full mx-auto block h-16 my-10 bg-main-text-color text-secondary px-5 rounded-full"
        placeholder="MAKE A USER NAME"
      />
      <input
        type="text"
        class="min-md:w-[36.31rem] w-full mx-auto block h-16 my-10 bg-main-text-color text-secondary px-5 rounded-full"
        placeholder="MAKE A USER NAME"
      />
      <div
        class="max-w-[36.31rem] mx-auto mb-10 flex justify-center flex-wrap items-center gap-x-2.5 gap-y-4"
      >
        <button
          class="w-44 h-11 cursor-pointer bg-main-text-color flex items-center justify-center rounded-full text-black"
        >
          <FontAwesomeIcon class="text-4xl" :icon="faEnvelope" />
        </button>
        <button
          class="w-44 h-11 cursor-pointer bg-main-text-color flex items-center justify-center rounded-full text-black"
        >
          <FontAwesomeIcon class="text-4xl" :icon="faApple" />
        </button>
      </div>
      <p class="text-2xl text-main-text-color capitalize text-center">
        Don't have an account?
        <RouterLink class="text-main transition" to="/logIn">signUp</RouterLink>
      </p>
      <ButtonCom class="w-40 mt-10 mx-auto block"
        ><template v-slot:contant> submit </template></ButtonCom
      >
    </form>
  </div>
</template>
