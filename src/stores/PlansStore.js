import { defineStore } from "pinia";
export const usePlansStore = defineStore("plansStore", {
  state: () => ({
    plans: [
      {
        name: "casual listener",
        price: "free",
        features: [
          "play music online",
          "shuffle play",
          "search & browse songs",
          "limited playlist creation",
          "daily usage limit 3 hour",
          "audio ads between songs",
        ],
      },
      {
        name: "regular listener",
        price: "$4.99/month",
        features: [
          "ad-free experience",
          "offline mode download up to 100",
          "unlimited playlist creation",
          "repeat mode & queue management",
          "basic equalizer controls",
          "daily usage limit 24 hours",
        ],
      },
      {
        name: "music enthusiasts",
        price: "$9.99/month",
        features: [
          "unlimited downloads",
          "advanced audio settings & high-fidelity playback",
          "sync across multiple devices",
          "artist-following & early release access",
          "lyrics display & translation",
          "smart recommendations based on behavior",
          "unlimited listening",
        ],
      },
    ],
  }),
});
