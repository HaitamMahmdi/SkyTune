import { defineStore } from "pinia";

export const useArtistsStore = defineStore("artistsStore", {
  state: () => ({
    artists: [
      {
        artistName: "Velvet Horizon",
        artistProfileImageUrl: "/public/assets/mediaCardImg/1.jpg",
        Albums: [
          { albumName: "Echoes of Dawn", albumRating: 5, streams: "1.234.567" },
        ],
      },
      {
        artistName: "Neon Valley",
        artistProfileImageUrl: "/public/assets/mediaCardImg/2.jpg",
        Albums: [
          { albumName: "City Lights", albumRating: 5, streams: "1.456.789" },
        ],
      },
      {
        artistName: "Crimson Shore",
        artistProfileImageUrl: "/public/assets/mediaCardImg/3.jpg",
        Albums: [
          { albumName: "Tides and Fire", albumRating: 5, streams: "1.678.945" },
        ],
      },
      {
        artistName: "Solar Drift",
        artistProfileImageUrl: "/public/assets/mediaCardImg/4.jpg",
        Albums: [
          {
            albumName: "Midnight Gravity",
            albumRating: 5,
            streams: "1.987.654",
          },
        ],
      },
      {
        artistName: "Echo Monarch",
        artistProfileImageUrl: "/public/assets/mediaCardImg/5.jpg",
        Albums: [
          { albumName: "Waves Beneath", albumRating: 5, streams: "1.345.678" },
        ],
      },
      {
        artistName: "Iron Garden",
        artistProfileImageUrl: "/public/assets/mediaCardImg/6.jpg",
        Albums: [
          {
            albumName: "Mechanical Roots",
            albumRating: 5,
            streams: "1.789.543",
          },
        ],
      },
      {
        artistName: "Golden Static",
        artistProfileImageUrl: "/public/assets/mediaCardImg/2.jpg",
        Albums: [
          {
            albumName: "The Glass Horizon",
            albumRating: 5,
            streams: "1.567.892",
          },
        ],
      },
      {
        artistName: "Crystal Reign",
        artistProfileImageUrl: "/public/assets/mediaCardImg/1.jpg",
        Albums: [
          {
            albumName: "The Silent Throne",
            albumRating: 5,
            streams: "1.892.345",
          },
        ],
      },
      {
        artistName: "Nova Bloom",
        artistProfileImageUrl: "/public/assets/mediaCardImg/3.jpg",
        Albums: [
          { albumName: "Rise in Motion", albumRating: 5, streams: "1.765.432" },
        ],
      },
      {
        artistName: "Arcane Meadow",
        artistProfileImageUrl: "/public/assets/mediaCardImg/4.jpg",
        Albums: [
          {
            albumName: "Twilight Whispers",
            albumRating: 5,
            streams: "1.423.987",
          },
        ],
      },
      {
        artistName: "Ivory Lantern",
        artistProfileImageUrl: "/public/assets/mediaCardImg/5.jpg",
        Albums: [
          { albumName: "Soft Horizon", albumRating: 5, streams: "1.938.456" },
        ],
      },
      {
        artistName: "Frozen Atlas",
        artistProfileImageUrl: "/public/assets/mediaCardImg/6.jpg",
        Albums: [
          {
            albumName: "Echoes of the North",
            albumRating: 3,
            streams: "1.324.789",
          },
        ],
      },
    ],
  }),
  getters: {
    getBestArtists(state) {
      return state.artists.filter((artist) => artist.Albums[0].albumRating > 3);
    },
  },
});
