<script setup>
import { useRouter } from "vue-router";
import ButtonCom from "./components/ButtonCom.vue";
const router = useRouter();
</script>

<template>
  <header class="mt-8">
    <div
      class="container px-5 relative flex flex-wrap justify-center md:justify-between items-center mx-auto"
    >
      <RouterLink to="/">
        <h1 class="font-bold text-3xl text-main">SkyTune</h1>
      </RouterLink>
      <ul
        class="flex flex-wrap w-full md:w-fit justify-center mt-5 md:m-0 font-inter gap-x-5 px-3"
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
</template>
