import { useLoaderData } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../redux/animeListApi";
import Loader from "../utils/Loader";
import ErrorPage from "./Error";
import { titles, youtubeVideo } from "../constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveSelect } from "../redux/reducers/detailedSlice";
import SimilarCard from "../components/SimillarCard";
import CharacterInfo from "../components/CharacterInfo";
import StaffInfo from "../components/StaffInfo";
import ReviewCard from "../components/ReviewCard";
import EpisodesCard from "../components/EpisodesCard";

const renderPerData = (key, data) => {
  return data ? (
    <div className="mb-3">
      <div className="text-slate-700 font-semibold">
        {key.substring(0, 1).toUpperCase() + key.substring(1)}
      </div>
      <div className="text-slate-500">{data}</div>
    </div>
  ) : null;
};

const InfoDiv = ({ data }) => {
  const active = useSelector((state) => state.detailed.activeSelect);
  const dispatch = useDispatch();
  const {
    mal_id,
    title,
    title_english,
    // genres,
    score: rating,
    rating: ages,
    episodes,
    favorites,
    duration,
    // licensors,
    // producers,
    // relations,
    status,
    // streaming,
    rank,
    popularity,
    synopsis,
    trailer,
    type,
    year,
    // aired,
    // airing,
    images: {
      webp: { large_image_url },
    },
  } = data.data;

  const OnClickHandler = (idx) => {
    dispatch(changeActiveSelect(idx));
  };

  return (
    <div>
      <div className="relative mb-10">
        <div className="h-[400px] overflow-hidden bg-gradient-to-b from-slate-500 to-slate-900">
          <iframe
            title={mal_id}
            src={youtubeVideo(trailer.youtube_id)}
            allowFullScreen
            className="opacity-25 pointer-events-none mt-[-350px]"
          ></iframe>
        </div>
        
      </div>
      <div className="flex gap-4 relative z-10 mt-[-200px]">
        <div className="flex-1 ml-20">
          <div>
            <img
              alt=""
              src={large_image_url}
              className="rounded-xl h-[300px] mb-5 shadow-2xl"
            />
            <div className="text-xl text-slate-600 font-semibold">
              {title_english || title}
            </div>
            <div className="w-max">
              <div className="rounded-md mt-3 px-4 py-3 bg-white w-max shadow-lg">
                ❤️ #{popularity} Most Popular
              </div>
              <div className="rounded-md mt-3 px-4 py-3 bg-white w-full shadow-lg">
                🏆 #{rank} Rank
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mr-20">
          <div className="rounded-md p-7 bg-white shadow-lg">
            <div className="mb-1 text-xl font-bold underline text-slate-700">
              Description
            </div>
            <div className="text-lg text-slate-600">{synopsis}</div>
          </div>
        </div>
      </div>
      <div className="flex mt-11 justify-between gap-8">
        <div>
          <div className="rounded-md p-7 ml-20 w-max bg-white shadow-lg">
            {renderPerData("ages", ages)}
            {renderPerData("year", year)}
            {renderPerData("status", status)}
            {renderPerData("type", type)}
            {renderPerData("rating", rating)}
            {renderPerData("episodes", episodes)}
            {renderPerData("favorites", favorites)}
            {renderPerData("duration", duration)}
          </div>
        </div>
        <div className="rounded-md p-7 mr-20 bg-white shadow-lg w-full">
          <div className="flex gap-5 justify-around">
            {titles.map((title, idx) => (
              <div
                onClick={() => OnClickHandler(idx)}
                className={`text-md ${
                  active === idx ? "text-slate-700" : "text-slate-500"
                }  font-semibold cursor-pointer hover:text-blue-500`}
              >
                {title}
              </div>
            ))}
          </div>
          {active === 0 && <SimilarCard id={mal_id} />}
          {active === 1 && <CharacterInfo id={mal_id} />}
          {active === 2 && <EpisodesCard id={mal_id} />}
          {active === 3 && <StaffInfo id={mal_id} />}
          {active === 4 && <ReviewCard id={mal_id} />}
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
