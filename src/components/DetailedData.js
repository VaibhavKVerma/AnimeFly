import { useLoaderData } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../redux/animeListApi";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const renderPerData = (key, data) => {
  return data ? (
    <div>
      {key.substring(0, 1).toUpperCase() + key.substring(1)} : {data}
    </div>
  ) : null;
};

const InfoDiv = ({ data }) => {
  const {
    mal_id,
    title,
    title_english,
    genres,
    score: rating,
    rating: ages,
    episodes,
    favorites,
    licensors,
    producers,
    relations,
    status,
    streaming,
    synopsis,
    trailer,
    type,
    year,
    aired,
    airing,
    images: {
      webp: { large_image_url },
    },
  } = data.data;

  return (
    <div>
      <div className="relative mb-10">
        <div className="h-[600px] overflow-hidden bg-gradient-to-b from-slate-500 to-slate-900">
          <iframe
            title={mal_id}
            src={`https://www.youtube.com/embed/${trailer.youtube_id}?autoplay=1&loop=1&mute=1&rel=0&controls=0&disablekb=1&playlist=${trailer.youtube_id}`}
            frameborder="0"
            allowfullscreen
            className="opacity-25 pointer-events-none mt-[-250px]"
          ></iframe>
        </div>
        <div className="absolute font-bold text-center text-[70px] font-[cursive] top-[25%] left-1/2 translate-x-[-50%] text-slate-300">
          {title_english || title}
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 ml-20">
          <img src={large_image_url} className="rounded-xl h-[300px] mb-5" />
          {renderPerData("ages", ages)}
          {renderPerData("year", year)}
          {renderPerData("status", status)}
          {renderPerData("type", type)}
          {renderPerData("rating", rating)}
          {renderPerData("episodes", episodes)}
          {renderPerData("favorites", favorites)}
        </div>
        <div className="flex-1 mr-20">
          <div className="rounded-3xl p-7 border-2 border-red-500 bg-white">
            <div className="mb-1 text-xl font-bold underline">Description</div>
            <div className="text-lg text-slate-700">{synopsis}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailedData = () => {
  const id = useLoaderData();
  const { data, isFetching, error } = useGetAnimeFullByIdQuery(id);

  if (error) return <ErrorPage />;
  return (
    <div className="mb-10">
      {isFetching ? <Loader /> : data ? <InfoDiv data={data} /> : null}
    </div>
  );
};

export default DetailedData;
