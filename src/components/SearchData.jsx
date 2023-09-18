import React, { useEffect, useState } from "react";
import { useGetAnimeBySearchQuery } from "../redux/animeListApi";
import { useSelector } from "react-redux";
import { minQueryLength } from "../Constants/Constants";
import { LoaderSmall } from "../utils/Loader";
import { Link } from "react-router-dom";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const renderSearchQueryData = (data) => {
  const {
    mal_id,
    title,
    title_english,
    images: {
      webp: { large_image_url },
    },
  } = data;

  return (
    <Link key={mal_id} to={`/anime/${mal_id}`}>
      <div className="flex gap-5 mb-3 items-center hover:bg-slate-200">
        <img
          className="h-40 w-[7rem]"
          src={large_image_url}
          alt={title_english || title}
        />
        <div>{title_english || title}</div>
      </div>
    </Link>
  );
};

const SearchData = () => {
  const query = useSelector((state) => state.search.value);
  const debouncedValue = useDebounce(query, 500);
  const { isFetching, data, error } = useGetAnimeBySearchQuery(debouncedValue, {
    skip: debouncedValue.length < minQueryLength,
  });

  if (query.length === 0) return null;
  return (
    <div className="absolute z-10 w-full overflow-y-scroll max-h-[450px] mt-12 px-3 py-[0.25rem] bg-white rounded-l border border-solid border-neutral-300">
      {data && data.data.map((searchData) => renderSearchQueryData(searchData))}
      {isFetching && (
        <div>
          <LoaderSmall />
        </div>
      )}
      {error && <div>Not Exists</div>}
    </div>
  );
};

export default React.memo(SearchData);
