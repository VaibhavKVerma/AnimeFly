import React, { useEffect, useState } from "react";
import { useLazyGetEpisodesByIdQuery } from "../redux/animeListApi";
import { LoaderSmall } from "../utils/Loader";

const RenderInfo = ({ episode, id }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`${
          episode.filler || episode.recap ? "bg-yellow-300" : "bg-slate-300"
        } text-slate-700 py-2 px-3 rounded-md text-center min-h-full flex justify-center items-center cursor-pointer transition-all hover:bg-slate-900 hover:text-white`}
      >
        Ep {id} : {episode.title}
      </div>
      {hover && (
        <div className="absolute w-max bg-slate-600 py-3 px-2 text-center z-10 h-max rounded-md top-full mt-2 text-slate-200 transition-all">
          {episode.filler && <div>Filler Episode</div>}
          {episode.recap && <div>Recap Episode</div>}
          <div>Aired on : {new Date(episode.aired).toLocaleString()}</div>
        </div>
      )}
    </div>
  );
};

const EpisodesData = ({ data, showLoadMore, clickedLoadMore }) => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
        {data.map((episode, idx) => (
          <RenderInfo key={idx} episode={episode} id={idx} />
        ))}
      </div>
      {showLoadMore && (
        <div
          className="text-blue-600 text-center transition-all m-auto mt-[25px] font-semibold px-3 py-1 w-fit cursor-pointer border-2 border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
          onClick={() => clickedLoadMore()}
        >
          Load More
        </div>
      )}
    </div>
  );
};

const EpisodesCard = ({ id }) => {
  const [getEpisodesById, { data,isFetching }] = useLazyGetEpisodesByIdQuery();
  const [page, setPage] = useState(1);
  const [episodes, setEpisode] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    getEpisodesById({ id, page });
  }, [page,id,getEpisodesById]);

  useEffect(() => {
    if (data) {
      setEpisode(e => [...e, ...data.data]);
      setShowLoadMore(data.pagination.has_next_page);
    }
  }, [data]);

  const clickedLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return !isFetching ? (
    <EpisodesData
      data={episodes}
      showLoadMore={showLoadMore}
      clickedLoadMore={clickedLoadMore}
    />
  ) : (
    <LoaderSmall />
  );
};

export default React.memo(EpisodesCard);
