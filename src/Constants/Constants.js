import {
  GithubLogo,
  InstagramLogo,
  PortfolioLogo,
  UpcomingDevLogo,
} from "./Svg";

export const topAnimeFilter = [
  { key: "bypopularity", text: "Popularity" },
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

export const actionConstant = {
  animeApi : "animeApi",
  timeApi : "timeApi",
  logoApi : "logoApi",
  detailed : "detailed",
  search : "search"
}

export const animeApi = "animeApi";
export const timeApi = "timeApi";
export const logoApi = "logoApi";
export const detailed = "detailed";
export const search = "search";

export const footerNav = [
  {
    link: "https://vaibhavkumarverma.netlify.app/",
    title: "Portfolio",
    component: <PortfolioLogo />,
  },
  {
    link: "/upcomingdev",
    title: "UpcomingDev",
    component: <UpcomingDevLogo />,
  },
  {
    link: "https://www.instagram.com/web__ohhh/",
    title: "Instagram",
    component: <InstagramLogo />,
  },
  {
    link: "https://github.com/VaibhavKVerma/AnimeFly",
    title: "GitHub",
    component: <GithubLogo />,
  },
];

export const headerNav = [
  {
    link: "/",
    title: "Home"
  },
  {
    link: "/schedule",
    title: "Schedule"
  },
  {
    link: "/recommendation",
    title: "Recommendation"
  }
];

export const minQueryLength = 2;