<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
</script>
<template>
  <div class="container my-40">
    <h2 class="text-7xl max-md:text-5xl mb-28 w-fit uppercase mx-auto">
      <span class="text-main">Sign</span> in
    </h2>

    <form
      @submit.prevent
      action=""
      class="flex flex-wrap min-md:px-10 justify-center gap-y-5"
    >
      <div
        class="max-w-[45rem] mx-auto text-secondary bg-secondary-bg-color min-md:px-20 px-2.5 pt-40 pb-16"
      >
        <div class="min-xl:hidden">
          <div class="relative mx-auto mb-4 w-fit">
            <input
              class="w-60 h-60 bg-main-text-color rounded-full"
              type="file"
              id="imageUpload"
              name="profilePicture"
              accept="image/png, image/jpeg, image/gif"
            />
            <div
              class="text-4xl text-center absolute left-3/6 top-3/6 text-secondary transform -translate-3/6"
            >
              <FontAwesomeIcon :icon="faUpload" />
              <p class="text-[16px] mt-4">upload an image for youer profile</p>
            </div>
          </div>
          <input
            type="text"
            class="w-full h-16 my-10 bg-main-text-color text-secondary px-5 rounded-full"
            placeholder="MAKE A USER NAME"
          />
        </div>
        <input
          placeholder="YOUER EMAIL"
          class="block px-6 w-full h-16 rounded-full bg-main-text-color"
          type="email"
        />
        <div class="flex my-10 flex-wrap gap-x-8 justify-between">
          <input
            placeholder="FIRST NAME"
            type="text"
            class="bg-main-text-color px-6 h-16 max-md:w-full max-md:mb-10 rounded-full w-60"
          />
          <input
            placeholder="LAST NAME"
            type="text"
            class="bg-main-text-color max-md:w-full px-6 h-16 rounded-full w-60"
          />
        </div>
        <input
          placeholder="PASSWORD"
          class="block px-6 w-full h-16 rounded-full bg-main-text-color"
          type="password"
        /><input
          placeholder="CONFIRM PASSWORD"
          class="block px-6 w-full mt-10 h-16 rounded-full bg-main-text-color"
          type="password"
        />
        <p class="text-center text-2xl text-main-text-color capitalize my-4">
          Or
        </p>
        <div
          class="max-w-[36.31rem] mb-10 flex justify-center flex-wrap items-center gap-x-2.5 gap-y-4"
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
          already have an account ?
          <RouterLink class="text-main transition" to="/logIn"
            >logIn</RouterLink
          >
        </p>
        <ButtonCom
          class="w-52 mx-auto mt-20 text-2xl py-2 px-10 block min-xl:hidden"
          ><template v-slot:contant> submit </template></ButtonCom
        >
      </div>
      <div
        class="bg-secondary-bg-color max-xl:hidden flex flex-col min-h-[600px] justify-between px-20 pt-16 pb-16"
      >
        <div class="">
          <div class="relative mx-auto mb-4 w-fit">
            <input
              class="w-60 h-60 bg-main-text-color rounded-full"
              type="file"
              id="imageUpload"
              name="profilePicture"
              accept="image/png, image/jpeg, image/gif"
            />
            <div
              class="text-4xl text-center absolute left-3/6 top-3/6 text-secondary transform -translate-3/6"
            >
              <FontAwesomeIcon :icon="faUpload" />
              <p class="text-[16px] mt-4">upload an image for youer profile</p>
            </div>
          </div>
          <input
            type="text"
            class="min-[1440px]:w-96 h-16 mt-12 bg-main-text-color text-secondary px-5 rounded-full"
            placeholder="MAKE A USER NAME"
          />
        </div>
        <ButtonCom class="w-40 mx-auto block"
          ><template v-slot:contant> submit </template></ButtonCom
        >
      </div>
    </form>
  </div>
</template>
