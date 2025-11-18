import { defineStore } from "pinia";

export const useArtistsStore = defineStore("artistsStore", {
  state: () => ({
    artists: [
      {
        artistName: "Velvet Horizon",
        artistProfileImageUrl: "/public/assets/mediaCardImg/1.jpg",
        Albums: [
          {
            albumName: "Echoes of Dawn",
            albumRating: 5,
            streams: "1.234.567",
            songs: [
              { songName: "Morning Light", createDate: "2023/01/15" },
              { songName: "Silent Waves", createDate: "2023/01/16" },
            ],
          },
        ],
      },
      {
        artistName: "Neon Valley",
        artistProfileImageUrl: "/public/assets/mediaCardImg/2.jpg",
        Albums: [
          {
            albumName: "City Lights",
            albumRating: 5,
            streams: "1.456.789",
            songs: [
              { songName: "Neon Streets", createDate: "2022/12/05" },
              { songName: "Midnight Drive", createDate: "2022/12/06" },
            ],
          },
        ],
      },
      {
        artistName: "Crimson Shore",
        artistProfileImageUrl: "/public/assets/mediaCardImg/3.jpg",
        Albums: [
          {
            albumName: "Tides and Fire",
            albumRating: 5,
            streams: "1.678.945",
            songs: [
              { songName: "Crimson Tide", createDate: "2023/02/10" },
              { songName: "Burning Horizon", createDate: "2023/02/11" },
            ],
          },
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
            songs: [
              { songName: "Gravity Shift", createDate: "2023/03/20" },
              { songName: "Starlight Echo", createDate: "2023/03/21" },
            ],
          },
        ],
      },
      {
        artistName: "Echo Monarch",
        artistProfileImageUrl: "/public/assets/mediaCardImg/5.jpg",
        Albums: [
          {
            albumName: "Waves Beneath",
            albumRating: 5,
            streams: "1.345.678",
            songs: [
              { songName: "Beneath the Waves", createDate: "2023/04/12" },
              { songName: "Ocean Whisper", createDate: "2023/04/13" },
            ],
          },
        ],
      },
      // ...you can continue similarly for the other artists
    ],
  }),
  getters: {
    getBestArtists(state) {
      return state.artists.filter((artist) => artist.Albums[0].albumRating > 3);
    },
  },
});
