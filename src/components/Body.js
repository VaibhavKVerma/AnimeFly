import { useEffect } from "react";
import { topAnimeFilter } from "../ApiConstants";
import { useLazyGetTopAnimeQuery } from "../redux/animeListApi";
import CardComponent from "./CardComponent";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../redux/reducers/filterReducer";
import Pagination from "./Pagination";

const Body = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.type);
  const [getTopAnime, { data: topAnime, isFetching }] =
    useLazyGetTopAnimeQuery();

  const selectFilterType = (event) => {
    dispatch(filterAction(event.target.value));
  };

  useEffect(() => {
    getTopAnime(filter);
  }, [getTopAnime, filter]);

  return (
    <div>
      <div className="flex justify-center items-end mb-8">
        <div className="text-4xl font-semibold text-red-700 font-sans">
          Top Anime
        </div>
        <div className="w-4/5 h-1 bg-red-600" />
        <div>
          <select
            onChange={selectFilterType}
            className="border-2 border-l-red-950"
            value={filter}
          >
            {topAnimeFilter.map((filter) => (
              <option key={filter.key} value={filter.key}>
                {filter.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      {isFetching ? (
        <Loader />
      ) : topAnime ? (
        <div>
          <div className="grid grid-cols-5 gap-4">
            {topAnime?.data.map((anime, idx) => (
              <CardComponent
                data={anime}
                key={idx}
              />
            ))}
          </div>
          <Pagination />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Body;
