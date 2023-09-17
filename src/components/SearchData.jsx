import React, { useEffect, useState } from "react";
import { useGetAnimeBySearchQuery } from "../redux/animeListApi";
import { useSelector } from "react-redux";
import { minQueryLength } from "../constants/Constants";
import { LoaderSmall } from "../utils/Loader";

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

const SearchData = () => {
  const query = useSelector((state) => state.search.value);
  const debouncedValue = useDebounce(query,500);
  const { isFetching } = useGetAnimeBySearchQuery(debouncedValue, {
    skip: debouncedValue.length < minQueryLength,
  });
  if (isFetching) return <div><LoaderSmall /></div>;
  return <div><LoaderSmall /></div>;
};

export default React.memo(SearchData);
