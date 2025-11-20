<script setup>
import { useRouter } from "vue-router";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = useRouter();
</script>
<template>
  <footer class="bg-secondary-bg-color">
    <div class="container pb-8 min-md:px-10">
      <ul
        class="flex flex-wrap mx-auto relative w-full md:w-fit justify-center font-inter gap-x-5 px-3 py-5 mb-20"
      >
        <li
          v-for="(route, index) in router.getRoutes()"
          :key="route.meta.title"
          v-show="index <= 4"
        >
          <RouterLink
            :to="{ name: route.name }"
            class="hover:text-main duration-100"
          >
            {{ route.meta.title }}
          </RouterLink>
        </li>
        <span
          class="absolute w-80 h-0.5 bg-main-text-color block bottom-0 lef-3/6 transform"
        ></span>
      </ul>
      <div class="grid min-lg:grid-cols-2 justify-center">
        <div>
          <div class="container max-md:text-center">
            <div class="flex max-md:block">
              <h2 class="min-md:text-5xl text-3xl uppercase">
                <span class="text-main">Sky</span>Tune
              </h2>
              <div class="self-end min-md:ml-4 max-md:mt-4">
                <FontAwesomeIcon class="text-[#E1306C]" :icon="faInstagram" />
                <FontAwesomeIcon class="ml-4" :icon="faXTwitter" />
                <FontAwesomeIcon class="text-error mx-4" :icon="faYoutube" />
                <FontAwesomeIcon class="" :icon="faTiktok" />
              </div>
            </div>
            <p class="uppercase max-w-xl mt-8 min-md:ml-9 mx-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              neque dolor saepe magnam, ducimus modi accusamus blanditiis
              voluptatem vel, autem quos est vero iure totam rerum sint aliquam
              magni odio.
            </p>
          </div>
        </div>
        <div class="min-lg:ml-auto max-lg:mt-10 flex flex-col items-center">
          <h2 class="text-title mb-10 text-center">contact us</h2>
          <form @submit.prevent class="min-lg:w-lg w-full px-2">
            <input
              class="bg-Gainsboro block w-full h-16 rounded-full px-8 text-white"
              type="email"
              required
              placeholder="Email"
            />
            <input
              class="bg-Gainsboro block my-8 w-full h-16 rounded-full px-8 text-white"
              type="text"
              required
              placeholder="Title Of The Message"
            />
            <textarea
              class="bg-Gainsboro block mb-5 min-w-full w-full max-w-lg max-h-80 min-h-80 rounded-4xl p-8 text-white"
              name=""
              id=""
              required
              placeholder="Message Body"
            ></textarea>
            <input
              class="bg-main cursor-pointer px-6 rounded-full py-2.5 uppercase text-secondary-bg-color"
              type="submit"
              value="Submit"
            />
            <input
              class="bg-black ml-2 cursor-pointer px-6 rounded-full py-2.5 uppercase text-main-text-color"
              type="reset"
              value="Reset"
            />
          </form>
        </div>
      </div>
    </div>
    <div class="h-16 w-full bg-main"></div>
  </footer>
</template>
