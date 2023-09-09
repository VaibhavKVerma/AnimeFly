export const topAnimeFilter = [
  { key: "bypopularity", text: "By Popularity" },
  { key: "airing", text: "Airing" },
  { key: "favorite", text: "Favourite" },
];

export const youtubeVideo = (id) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&loop=1&mute=1&rel=0&controls=0&disablekb=1&playlist=${id}`;

export const titles = ["Similar", "Characters", "Episodes", "Staff", "Reviews"];

export const listType = {
  manga: "manga",
  anime: "anime",
};

export const weeks = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const animeApi = "animeApi";
export const timeApi = "timeApi";