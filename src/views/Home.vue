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
const slider = ref(null),
  card = ref([null]);

const getPageX = (event) =>
  event.type.startsWith("touch") ? event.touches[0].pageX : event.pageX;

let isSliding = ref(false),
  startX,
  startScrollLeft,
  pos = ref(null);
const slideStart = (event) => {
  isSliding.value = true;
  startX = getPageX(event);
  startScrollLeft = slider.value.scrollLeft;
};
const sliding = (event) => {
  if (!isSliding.value) return;
  slider.value.scrollLeft = startScrollLeft - (getPageX(event) - startX);
  pos.value = slider.value.scrollLeft;
  console.log(`sliding`);
};
const infiniteScroll = () => {
  if (slider.value.scrollLeft === 0) {
    slider.value.scrollLeft =
      slider.value.scrollWidth - 2 * slider.value.offsetWidth;
    console.log(`you are at the end`);
    console.log(slider.value.scrollLeft);
  } else if (
    Math.ceil(slider.value.scrollLeft) ===
    slider.value.scrollWidth - slider.value.offsetWidth
  ) {
    console.log(slider.value.scrollLeft, slider.value.scrollWidth);

    slider.value.scrollLeft = slider.value.offsetWidth;
    console.log(`you are at the end but right`);
    console.log(slider.value.scrollLeft);
  }
};
onMounted(() => {
  const sliderChildrens = [...slider.value.children].slice(1);
  let cardPerview = Math.round(
    slider.value.offsetWidth / sliderChildrens[0].offsetWidth
  );
  sliderChildrens
    .slice(-cardPerview)
    .reverse()
    .forEach((card, index) => {
      if (card) {
        const clone = card.cloneNode(true);
        clone.classList.add(`copy${index}`);
        slider.value.prepend(clone);
      }
    });

  sliderChildrens.slice(0, cardPerview).forEach((card, index) => {
    if (card) {
      const clone = card.cloneNode(true);
      clone.classList.add(`copy0-${index}`);
      slider.value.append(clone);
    }
  });
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
      src="/assets/bgImage.jpg"
      alt="Background music theme"
    />
    <div
      class="absolute container flex flex-col justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
    >
      <!-- Desktop animated text -->
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

      <!-- Mobile text -->
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

  <section
    ref="slider"
    @mousedown.capture="slideStart"
    @mousemove="sliding"
    @mouseup.capture="isSliding = false"
    @mouseleave="isSliding = false"
    @touchstart.capture="slideStart"
    @touchmove="sliding"
    @touchend.capture="isSliding = false"
    @scroll="infiniteScroll"
    class="h-fit group max-w-[90rem] scroll-auto grid grid-flow-col auto-cols-[17.75rem] overflow-hidden relative"
  >
    <span
      :style="{ left: `${pos}px` }"
      class="w-full h-full max-md:!hidden flex justify-center items-center group-hover:animate-disappear animate-reappear bg-[rgba(0,0,0,0.8)] z-10 absolute"
    >
      <p class="text-[clamp(2.5rem,5vw,4rem)]">Find and explore genres</p>
    </span>

    <div
      v-for="genre in genres"
      :key="genre.name"
      class="min-w-[17.75rem] cursor-grab select-none h-[53rem] overflow-hidden relative"
    >
      <img
        class="h-full w-full peer"
        :src="`public/assets${genre.imageURL}`"
        :alt="`${genre.name} cover art`"
        draggable="false"
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
