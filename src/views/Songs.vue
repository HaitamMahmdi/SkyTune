<script setup>
import { useArtistsStore } from "../stores/ArtistsStore";
import MediaCard from "../components/MediaCard.vue";
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const base = import.meta.env.BASE_URL;
const artists = useArtistsStore();
</script>
<template>
  <div class="container my-40">
    <div class="flex flex-wrap gap-5 max-md:justify-center">
      <h2 class="text-[40px] mb-1.5 max-md:text-center max-md:mt-10 w-full">
        pop music
      </h2>
      <div
        v-for="x in 10"
        :key="x"
        class="rounded-full cursor-pointer overflow-hidden"
      >
        <img
          class="w-32 h-32"
          :src="`${base}public/assets/mediaCardImg/${x}.jpg`"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-wrap gap-5 max-md:justify-center">
      <h2 class="text-[40px] mb-1.5 w-full max-md:text-center max-md:mt-10">
        pop music
      </h2>
      <div
        v-for="x in 10"
        :key="x"
        class="rounded-full cursor-pointer overflow-hidden"
      >
        <img
          class="w-32 h-32"
          :src="`${base}public/assets/mediaCardImg/${x}.jpg`"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-wrap gap-5 max-md:justify-center">
      <h2 class="text-[40px] mb-1.5 w-full max-md:text-center max-md:mt-10">
        pop music
      </h2>
      <div
        v-for="x in 10"
        :key="x"
        class="rounded-full cursor-pointer overflow-hidden"
      >
        <img
          class="w-32 h-32"
          :src="`${base}public/assets/mediaCardImg/${x}.jpg`"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-wrap gap-5 max-md:justify-center">
      <h2 class="text-[40px] mb-1.5 w-full max-md:text-center max-md:mt-10">
        pop music
      </h2>
      <div
        v-for="x in 10"
        :key="x"
        class="rounded-full cursor-pointer overflow-hidden"
      >
        <img
          class="w-32 h-32"
          :src="`${base}public/assets/mediaCardImg/${x}.jpg`"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
    <div class="mt-10">
      <div class="flex flex-wrap container justify-center">
        <div class="max-w-[720px] aspect-square">
          <MediaCard
            v-for="artist in artists.getBestArtists.slice(0, 1)"
            :key="artist.artistName"
            :title="artist.artistName"
            :sub-title="artist.Albums[0].albumName"
            :url="`${base}/assets/mediaCardImg/${9}.jpg`"
            :custom-class="' w-full h-full aspect-square'"
            :album-url="`${base}/assets/albums/album${1}.jpg`"
            :streams="artist.Albums[0].streams"
            :type="'lg'"
          ></MediaCard>
        </div>

        <div class="flex max-w-[720px] aspect-square justify-center flex-wrap">
          <MediaCard
            v-for="(artist, index) in artists.getBestArtists.slice(2, 6)"
            :key="artist.artistName"
            :title="artist.artistName"
            :sub-title="artist.Albums[0].albumName"
            :custom-class="`min-w-[320px] max-w-[360px] ${index} aspect-square`"
            :url="`${base}/assets/mediaCardImg/${index ? index : 11}.jpg`"
            :album-url="`${base}/assets/albums/album${
              index === 0 ? index + 5 : index
            }.jpg`"
            :streams="artist.Albums[0].streams"
            :type="'midX'"
          ></MediaCard>
        </div>
      </div>
    </div>
    <div class="mt-1.5 flex flex-wrap justify-center">
      <div class="max-w-[1040px]">
        <MediaCard
          v-for="(artist, index) in artists.getBestArtists.slice(0, 10)"
          :key="artist.artistName"
          :title="artist.Albums[0].songs[0].songName"
          :sub-title="artist.Albums[0].albumName"
          :url="`${base}/assets/mediaCardImg/${index ? index : 11}.jpg`"
          :id="index"
          :streams="artist.Albums[0].streams"
          :type="'sm'"
          :date-created="artist.Albums[0].songs[0].createDate"
        ></MediaCard>
      </div>
      <div class="text-center uppercase max-w-96 mx-auto my-28">
        <h3 class="max-sm:text-3xl text-5xl">
          subscribe <span class="text-main">now</span>
        </h3>
        <p class="text-2xl mb-20 mt-11">
          get a full access to your favorite
          <span class="text-main">songs</span>,
          <span class="text-main">artists</span> ,
          <span class="text-main">albums</span> and So much more.
        </p>
        <ButtonCom class="w-56"
          ><template v-slot:contant>subscribe</template></ButtonCom
        >
      </div>
    </div>
  </div>
</template>
