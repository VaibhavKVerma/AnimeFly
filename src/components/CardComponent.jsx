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
        className={`absolute top-1/3 z-10 bg-white p-4 rounded-md shadow-lg w-64`}
      >
        <div></div>
        <div className="mb-2 font-bold">
          Rating: <span className="font-semibold">{score}</span>
        </div>
        <div className="mb-2 font-bold">
          Age: <span className="font-semibold">{rating}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {genres.map((genre) => (
            <div
              className="bg-slate-300 pr-3 pl-3 pt-1 pb-1 flex flex-col text-center justify-center rounded-full font-semibold text-sm min-w-fit"
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
          className="group rounded-lg hover:bg-slate-200 ease-in-out duration-300"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div
            key={mal_id}
            className="w-64 cursor-pointer p-2 group-hover:blur-[1.5px]"
          >
            <img
              className="m-auto rounded-md mb-2 h-80"
              alt={title}
              src={large_image_url}
            />
            <div className="text-zinc-500 font-mono text-base font-semibold text-center ease-in-out duration-300 group-hover:text-zinc-800">
              {title_english || title}{" "}
            </div>
          </div>
          {hover && infoDiv()}
        </div>
      </Link>
    </div>
  );
};
export default CardComponent;
