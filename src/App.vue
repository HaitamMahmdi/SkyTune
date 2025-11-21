<script setup>
import { useRouter } from "vue-router";
import FooterCom from "./components/FooterCom.vue";
const router = useRouter();
</script>

<template>
  <header class="mt-8 absolute z-50 top-0 w-full">
    <div
      class="container px-5 relative flex flex-wrap justify-center md:justify-between items-center mx-auto"
    >
      <RouterLink to="/">
        <h1 class="font-bold text-3xl text-main">SkyTune</h1>
      </RouterLink>
      <ul
        class="flex flex-wrap w-full md:w-fit justify-center mt-5 md:m-0 font-inter gap-x-5 px-3"
      >
        <li>
          <RouterLink to="/" class="hover:text-main duration-100"
            >Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/songs" class="hover:text-main duration-100"
            >songs
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/selectPlan" class="hover:text-main duration-100"
            >Select Plan
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/getApp" class="hover:text-main duration-100"
            >Get App
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:text-main duration-100"
            >About
          </RouterLink>
        </li>
      </ul>
      <div class="hidden lg:block">
        <RouterLink :to="{ name: 'signIn' }" class="mr-6">
          <ButtonCom>
            <template v-slot:contant>sign In</template>
          </ButtonCom>
        </RouterLink>
        <RouterLink :to="{ name: 'logIn' }">
          <ButtonCom>
            <template v-slot:contant>log In</template>
          </ButtonCom>
        </RouterLink>
      </div>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <FooterCom></FooterCom>
</template>
