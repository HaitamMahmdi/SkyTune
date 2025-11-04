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
            releaseDate: "2021-03-14",
            genre: "Indie Rock",
            coverArt: "velvet_horizon_echoes.jpg",
            songs: [
              {
                songName: "Golden Skies",
                rating: 4,
                releaseDate: "2021-03-15",
              },
              {
                songName: "Through the Rain",
                rating: 5,
                releaseDate: "2021-03-16",
              },
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
            albumRating: 4,
            releaseDate: "2020-11-08",
            genre: "Synthwave",
            coverArt: "neon_valley_citylights.jpg",
            songs: [
              {
                songName: "Electric Sunset",
                rating: 5,
                releaseDate: "2020-11-09",
              },
              { songName: "Night Drive", rating: 3, releaseDate: "2020-11-10" },
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
            albumRating: 3,
            releaseDate: "2019-07-21",
            genre: "Alternative",
            coverArt: "crimson_shore_tides.jpg",
            songs: [
              {
                songName: "Saltwater Eyes",
                rating: 4,
                releaseDate: "2019-07-22",
              },
              {
                songName: "Burn the Waves",
                rating: 3,
                releaseDate: "2019-07-23",
              },
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
            releaseDate: "2022-05-18",
            genre: "Electronic",
            coverArt: "solar_drift_midnight.jpg",
            songs: [
              { songName: "Zero Orbit", rating: 5, releaseDate: "2022-05-19" },
              {
                songName: "Falling Through Stars",
                rating: 4,
                releaseDate: "2022-05-20",
              },
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
            albumRating: 2,
            releaseDate: "2018-02-11",
            genre: "Dream Pop",
            coverArt: "echo_monarch_waves.jpg",
            songs: [
              {
                songName: "Deep Currents",
                rating: 3,
                releaseDate: "2018-02-12",
              },
              {
                songName: "Whispers Below",
                rating: 2,
                releaseDate: "2018-02-13",
              },
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
            albumRating: 4,
            releaseDate: "2021-10-09",
            genre: "Industrial Rock",
            coverArt: "iron_garden_mechroots.jpg",
            songs: [
              {
                songName: "Rusted Bloom",
                rating: 3,
                releaseDate: "2021-10-10",
              },
              { songName: "Iron Petals", rating: 4, releaseDate: "2021-10-11" },
            ],
          },
        ],
      },
      {
        artistName: "Frozen Atlas",
        artistProfileImageUrl: "/public/assets/mediaCardImg/1.jpg",

        Albums: [
          {
            albumName: "Echoes of the North",
            albumRating: 3,
            releaseDate: "2019-12-01",
            genre: "Ambient",
            coverArt: "frozen_atlas_echoes.jpg",
            songs: [
              {
                songName: "Frozen Light",
                rating: 2,
                releaseDate: "2019-12-02",
              },
              {
                songName: "Silent Mountains",
                rating: 4,
                releaseDate: "2019-12-03",
              },
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
            releaseDate: "2023-07-23",
            genre: "Pop",
            coverArt: "golden_static_glass.jpg",
            songs: [
              {
                songName: "Shattered Dream",
                rating: 4,
                releaseDate: "2023-07-24",
              },
              {
                songName: "Bright Enough",
                rating: 5,
                releaseDate: "2023-07-25",
              },
            ],
          },
        ],
      },
      {
        artistName: "Paper Satellite",
        Albums: [
          {
            albumName: "Gravity Letters",
            albumRating: 4,
            releaseDate: "2020-06-04",
            genre: "Indie Folk",
            coverArt: "paper_satellite_gravity.jpg",
            songs: [
              {
                songName: "Falling Words",
                rating: 3,
                releaseDate: "2020-06-05",
              },
              { songName: "Paper Moon", rating: 4, releaseDate: "2020-06-06" },
            ],
          },
        ],
      },
      {
        artistName: "Azure Mirage",
        Albums: [
          {
            albumName: "Beneath the Surface",
            albumRating: 3,
            releaseDate: "2017-09-12",
            genre: "Jazz Fusion",
            coverArt: "azure_mirage_beneath.jpg",
            songs: [
              {
                songName: "Midnight Dive",
                rating: 2,
                releaseDate: "2017-09-13",
              },
              { songName: "Echo Bay", rating: 3, releaseDate: "2017-09-14" },
            ],
          },
        ],
      },
      {
        artistName: "Sapphire Sun",
        Albums: [
          {
            albumName: "Reflected Flames",
            albumRating: 4,
            releaseDate: "2021-01-07",
            genre: "Pop Rock",
            coverArt: "sapphire_sun_reflected.jpg",
            songs: [
              {
                songName: "Endless Flame",
                rating: 4,
                releaseDate: "2021-01-08",
              },
              { songName: "Silver Dust", rating: 5, releaseDate: "2021-01-09" },
            ],
          },
        ],
      },
      {
        artistName: "Crystal Reign",
        Albums: [
          {
            albumName: "The Silent Throne",
            albumRating: 5,
            releaseDate: "2022-08-10",
            genre: "Symphonic Metal",
            coverArt: "crystal_reign_throne.jpg",
            songs: [
              {
                songName: "Frozen Queen",
                rating: 5,
                releaseDate: "2022-08-11",
              },
              {
                songName: "Crown of Glass",
                rating: 4,
                releaseDate: "2022-08-12",
              },
            ],
          },
        ],
      },
      {
        artistName: "Obsidian Mirage",
        Albums: [
          {
            albumName: "Dark Sands",
            albumRating: 3,
            releaseDate: "2019-05-02",
            genre: "Alternative",
            coverArt: "obsidian_mirage_darksands.jpg",
            songs: [
              {
                songName: "Shifting Dunes",
                rating: 3,
                releaseDate: "2019-05-03",
              },
              { songName: "Desert Eyes", rating: 2, releaseDate: "2019-05-04" },
            ],
          },
        ],
      },
      {
        artistName: "Nova Bloom",
        Albums: [
          {
            albumName: "Rise in Motion",
            albumRating: 4,
            releaseDate: "2023-04-16",
            genre: "Pop",
            coverArt: "nova_bloom_rise.jpg",
            songs: [
              {
                songName: "Eternal Youth",
                rating: 4,
                releaseDate: "2023-04-17",
              },
              {
                songName: "Bright Start",
                rating: 5,
                releaseDate: "2023-04-18",
              },
            ],
          },
        ],
      },
      {
        artistName: "Lunar Spectrum",
        Albums: [
          {
            albumName: "Reflections Beyond",
            albumRating: 2,
            releaseDate: "2020-02-02",
            genre: "Electronic",
            coverArt: "lunar_spectrum_reflections.jpg",
            songs: [
              { songName: "Glass Orbit", rating: 2, releaseDate: "2020-02-03" },
              {
                songName: "Celestial Pulse",
                rating: 3,
                releaseDate: "2020-02-04",
              },
            ],
          },
        ],
      },
      {
        artistName: "The Violet Frame",
        Albums: [
          {
            albumName: "Shattered Vision",
            albumRating: 3,
            releaseDate: "2018-10-11",
            genre: "Indie",
            coverArt: "violet_frame_shattered.jpg",
            songs: [
              {
                songName: "Broken Glass",
                rating: 3,
                releaseDate: "2018-10-12",
              },
              { songName: "Soft Focus", rating: 4, releaseDate: "2018-10-13" },
            ],
          },
        ],
      },
      {
        artistName: "Arcane Meadow",
        Albums: [
          {
            albumName: "Twilight Whispers",
            albumRating: 5,
            releaseDate: "2021-09-19",
            genre: "Folk",
            coverArt: "arcane_meadow_twilight.jpg",
            songs: [
              { songName: "Misty Trail", rating: 4, releaseDate: "2021-09-20" },
              { songName: "Autumn Path", rating: 5, releaseDate: "2021-09-21" },
            ],
          },
        ],
      },
      {
        artistName: "Driftwood Theory",
        Albums: [
          {
            albumName: "Silent Tides",
            albumRating: 3,
            releaseDate: "2019-03-24",
            genre: "Ambient",
            coverArt: "driftwood_theory_silent.jpg",
            songs: [
              { songName: "Ebb Flow", rating: 3, releaseDate: "2019-03-25" },
              { songName: "Low Tide", rating: 2, releaseDate: "2019-03-26" },
            ],
          },
        ],
      },
      {
        artistName: "Ivory Lantern",
        Albums: [
          {
            albumName: "Soft Horizon",
            albumRating: 4,
            releaseDate: "2022-12-12",
            genre: "Pop",
            coverArt: "ivory_lantern_soft.jpg",
            songs: [
              {
                songName: "Silver Night",
                rating: 4,
                releaseDate: "2022-12-13",
              },
              {
                songName: "Into the Glow",
                rating: 5,
                releaseDate: "2022-12-14",
              },
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
