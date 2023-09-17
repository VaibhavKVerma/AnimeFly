import { useEffect } from "react";
import { topAnimeFilter } from "../constants/Constants";
import { useLazyGetTopAnimeQuery } from "../redux/animeListApi";
import CardComponent from "../components/CardComponent";
import Loader from "../utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../redux/reducers/filterReducer";
import Pagination from "../components/Pagination";

const Home = () => {
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
      <div className="flex justify-between items-center mb-8 mt-8 ml-4 mr-4">
        <div className="text-4xl font-semibold text-red-700 font-sans underline">
          Top Anime
        </div>
        <div>
          <span className="text-xl font-semibold text-red-700 font-sans">Sort By : </span> 
          <select
            onChange={selectFilterType}
            className="border-2 rounded-lg outline-none p-2 border-red-700 data-te-select-init"
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
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
            {topAnime?.data.map((anime, idx) => (
              <CardComponent data={anime} key={idx} />
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
export default Home;
