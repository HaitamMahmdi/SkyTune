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
      {
        artistName: "Iron Garden",
        artistProfileImageUrl: "/public/assets/mediaCardImg/6.jpg",
        Albums: [
          {
            albumName: "Mechanical Roots",
            albumRating: 5,
            streams: "1.789.543",
            songs: [
              { songName: "Rust and Bloom", createDate: "2023/05/01" },
              { songName: "Steel Harmony", createDate: "2023/05/02" },
            ],
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
            songs: [
              { songName: "Shattered Light", createDate: "2023/06/15" },
              { songName: "Reflections", createDate: "2023/06/16" },
            ],
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
            songs: [
              { songName: "Frozen Crown", createDate: "2023/07/10" },
              { songName: "Regal Silence", createDate: "2023/07/11" },
            ],
          },
        ],
      },
      {
        artistName: "Nova Bloom",
        artistProfileImageUrl: "/public/assets/mediaCardImg/3.jpg",
        Albums: [
          {
            albumName: "Rise in Motion",
            albumRating: 5,
            streams: "1.765.432",
            songs: [
              { songName: "First Light", createDate: "2023/08/05" },
              { songName: "New Horizons", createDate: "2023/08/06" },
            ],
          },
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
            songs: [
              { songName: "Evening Secrets", createDate: "2023/09/01" },
              { songName: "Moonlit Path", createDate: "2023/09/02" },
            ],
          },
        ],
      },
      {
        artistName: "Ivory Lantern",
        artistProfileImageUrl: "/public/assets/mediaCardImg/5.jpg",
        Albums: [
          {
            albumName: "Soft Horizon",
            albumRating: 5,
            streams: "1.938.456",
            songs: [
              { songName: "Gentle Glow", createDate: "2023/10/11" },
              { songName: "Silent Dawn", createDate: "2023/10/12" },
            ],
          },
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
            songs: [
              { songName: "Northern Winds", createDate: "2023/11/01" },
              { songName: "Icebound Echoes", createDate: "2023/11/02" },
            ],
          },
        ],
      },
      {
        artistName: "Silver Horizon",
        artistProfileImageUrl: "/public/assets/mediaCardImg/1.jpg",
        Albums: [
          {
            albumName: "Moonrise Serenade",
            albumRating: 4,
            streams: "1.111.222",
            songs: [
              { songName: "Nightfall", createDate: "2023/12/01" },
              { songName: "Silver Lining", createDate: "2023/12/02" },
            ],
          },
        ],
      },
      {
        artistName: "Obsidian Echo",
        artistProfileImageUrl: "/public/assets/mediaCardImg/2.jpg",
        Albums: [
          {
            albumName: "Shadow Pulse",
            albumRating: 5,
            streams: "1.222.333",
            songs: [
              { songName: "Dark Wave", createDate: "2024/01/05" },
              { songName: "Silent Beat", createDate: "2024/01/06" },
            ],
          },
        ],
      },
      {
        artistName: "Aurora Drift",
        artistProfileImageUrl: "/public/assets/mediaCardImg/3.jpg",
        Albums: [
          {
            albumName: "Polar Lights",
            albumRating: 5,
            streams: "1.333.444",
            songs: [
              { songName: "Northern Glow", createDate: "2024/02/10" },
              { songName: "Sky Dance", createDate: "2024/02/11" },
            ],
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
