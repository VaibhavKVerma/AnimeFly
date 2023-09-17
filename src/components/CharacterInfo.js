import { useState } from "react";
import { useGetCharactersByIdQuery } from "../redux/animeListApi";
import { LoaderSmall } from "../utils/Loader";

const CharacterData = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="mt-6">
      <div
        onClick={() => setShowMore(!showMore)}
        className="w-full flex justify-end cursor-pointer  text-slate-600 font-semibold hover:text-blue-500 mb-1"
      >
        Show {showMore ? "Less" : "More"}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]">
        {data.map((ele, idx) => {
          return (
            ((!showMore && idx < 18) || showMore) && (
              <div key={idx}>
                <img
                  className="w-[150px] h-[220px] rounded-xl"
                  src={ele.character.images.webp.image_url}
                  alt={ele.character.name}
                />
                <div className="mt-1 mb-3 font-semibold text-slate-600">{ele.character.name.split(", ").reverse().join(" ")}</div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

const CharacterInfo = ({ id }) => {
  const { data, isFetching } = useGetCharactersByIdQuery(id);
  if (isFetching) return <LoaderSmall />;
  return data ? <CharacterData data={data} /> : null;
};

export default CharacterInfo;
