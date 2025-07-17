<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const base = import.meta.env.BASE_URL;
const genres = [
  {
    name: "pop",
    imageURL: "/genreSection/genre.png",
  },
  {
    name: "Rock",
    imageURL: "/genreSection/genre1.png",
  },
  {
    name: "Hip-Hop",
    imageURL: "/genreSection/genre2.png",
  },
  {
    name: "K-Pop",
    imageURL: "/genreSection/genre3.png",
  },
  {
    name: "jazz",
    imageURL: "/genreSection/genre4.png",
  },
];
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
    <img
      class="w-full h-full brightness-50"
      src="/public/assets/bgImage.jpg"
      alt=""
    />
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
  <section class="h-[100vh] group relative flex">
    <span
      class="w-full h-full flex justify-center items-center group-hover:animate-disappear animate-reappear bg-[rgba(0,0,0,0.8)] z-10 absolute"
      ><p class="text-[clamp(2.5rem,5vw,4rem)]">
        fined and explore genres
      </p></span
    >
    <div
      class="min-w-[calc(100%/5)] overflow-hidden relative"
      v-for="genre in genres"
      :key="genre"
    >
      <img
        class="h-full w-full peer"
        :src="`public/assets${genre.imageURL}`"
        alt=""
      />
      <div
        class="absolute shadow-bigShdow bg-[rgba(4,3,3,0.72)] hover:animate-jumpIn peer-hover:animate-jumpIn animate-getOut flex-col items-center w-full"
      >
        <p class="text-[clamp(2rem,5vw,3.75rem)] mb-12">{{ genre.name }}</p>
        <ButtonCom class="w-48 h-12">
          <template v-slot:contant>Start listening</template>
        </ButtonCom>
      </div>
    </div>
  </section>
</template>
