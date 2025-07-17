<script setup>
import bgImage from "@/assets/bgImage.jpg";
import { onMounted, onUnmounted, ref } from "vue";
const heroText = ref(null);
const arr = [
  `LISTEN TO MUSIC`,
  `STREAM THE SOUNDTRACK OF YOUR LIFE`,
  `WHERE MUSIC FINDS YOU`,
  `TURN UP THE MOMENT`,
];
let num = 0;
function changText() {
  if (heroText.value && num < arr.length - 1) {
    heroText.value.innerText = arr[num];

    num += 1;
  } else if (heroText.value && num >= arr.length - 1) {
    heroText.value.innerText = arr[0];
    num = 1;
  }
}
let changTextsetInterval = null;
onMounted(() => {
  changTextsetInterval = setInterval(changText, 1000);
});
onUnmounted(() => {
  clearInterval(changTextsetInterval);
});
</script>
<template>
  <section class="h-[100vh] relative">
    <img class="w-full h-full brightness-50" :src="bgImage" alt="" />
    <div
      class="absolute container flex flex-col justify-center top-3/6 left-3/6 transform w-full -translate-3/6"
    >
      <div
        class="overflow-y-hidden md:block hidden md:h-10 lg:h-14 text-center text-2xl md:text-3xl lg:text-[2.5rem]"
      >
        <div
          class="relative top-0 font-bold lg:animate-chaingingText md:max-lg:animate-chaingingTextMd"
        >
          <h2>LISTEN TO MUSIC</h2>
          <h2>STREAM THE SOUNDTRACK OF YOUR LIFE</h2>
          <h2>WHERE MUSIC FINDS YOU</h2>
          <h2>TURN UP THE MOMENT</h2>
        </div>
      </div>
      <h2
        ref="heroText"
        class="text-center text-[clamp(2rem,5vw,3rem)] hidden max-md:block"
      >
        LISTEN TO MUSIC
      </h2>
      <ButtonCom class="w-40 mx-auto mt-10">
        <template v-slot:contant>sign in</template>
      </ButtonCom>
    </div>
  </section>
</template>
