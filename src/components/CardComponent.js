import { useState } from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ data }) => {
  const [hover, setHover] = useState(false);

  const {
    mal_id,
    title,
    title_english,
    genres,
    score,
    rating,
    images: {
      webp: { large_image_url },
    },
  } = data;

  const mouseEnter = () => setHover(true);
  const mouseLeave = () => setHover(false);

  const infoDiv = () => {
    return (
      <div
        className={`absolute top-1/3 left-full z-10 bg-white p-4 rounded-md shadow-lg w-max`}
      >
        <div></div>
        <div className="mb-2">Rating: {score}</div>
        <div className="mb-2">Age: {rating}</div>
        <div className="flex gap-4">
          {genres.map((genre) => (
            <div
              className="bg-slate-300 pr-3 pl-3 pt-1 pb-1 rounded-full font-semibold text-sm min-w-fit"
              key={genre.mal_id}
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-fit">
      <Link to={`anime/${mal_id}`}>
        <div
          key={mal_id}
          className="w-64 cursor-pointer p-2 group hover:bg-slate-200  rounded-lg"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <img
            className="m-auto rounded-md mb-2 h-80"
            alt={title}
            src={large_image_url}
          />
          <div className="text-zinc-500 font-mono text-base font-semibold text-center group-hover:text-zinc-800">
            {title_english || title}{" "}
          </div>
        </div>
        {hover && infoDiv()}
      </Link>
    </div>
  );
};
export default CardComponent;
