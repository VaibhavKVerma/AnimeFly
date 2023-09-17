import { Link } from "react-router-dom";
import {
  useGetAnimeRecommendationsByIdQuery,
  useGetAnimeRelationsByIdQuery,
  useGetPicturesByIdQuery,
} from "../redux/animeListApi";
import Loader, { LoaderSmall } from "../utils/Loader";
import { useState } from "react";

const RelationInfo = ({ info, imgData }) => {
  console.log(info,imgData);
  return (
    <div className="group cursor-pointer w-min">
      <Link to={`/${info.type}/${info.mal_id}`}>
        <img
          className="h-[200px] min-w-[130px] rounded-md"
          src={imgData.data[0].webp.large_image_url}
          alt={info.mal_id}
        />
        <div className="text-slate-500 font-semibold group-hover:text-blue-500 mt-1">
          {info.name.length > 30
            ? `${info.name.substring(0, 30)}....`
            : info.name}
        </div>
      </Link>
    </div>
  );
};

const RelationFetching = ({ info }) => {
  const { data, isFetching } = useGetPicturesByIdQuery(info);
  if(isFetching) return <LoaderSmall />;
  return data && data.map((ele,idx) => <RelationInfo info={info[idx]} imgData={ele} key={idx} />)
};

const RelationData = ({ data }) => {
  return (
    <div>
      {data.map((ele, idx) => {
        return (
          <div className="mt-3" key={idx}>
            <div className="mb-3 text-xl font-semibold text-slate-700">
              {ele.relation}
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]">
              {/* {ele.entry.map((info) => (
                <RelationInfo info={info} key={info.mal_id} />
              ))} */}
              <RelationFetching info={ele.entry} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const RecommendationData = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-slate-700 text-xl underline font-semibold">
          Recommendations
        </div>
        <div
          className="w-max cursor-pointer  text-slate-600 font-semibold hover:text-blue-500 mt-1"
          onClick={() => setShow(!show)}
        >
          Show {show ? "Less" : "More"}
        </div>
      </div>
      <div className="mt-3">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]">
          {data.map(
            (info, idx) =>
              ((!show && idx < 6) || show) && (
                <div
                  key={info.entry.mal_id}
                  className="group cursor-pointer w-min"
                >
                  <Link to={`/anime/${info.entry.mal_id}`}>
                    <img
                      className="h-[200px] min-w-[130px] rounded-md"
                      src={info.entry.images.webp.large_image_url}
                      alt={info.entry.mal_id}
                    />
                    <div className="text-slate-500 font-semibold group-hover:text-blue-500 mt-1">
                      {info.entry.title.length > 30
                        ? `${info.entry.title.substring(0, 30)}....`
                        : info.entry.title}
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

const SimilarCard = ({ id }) => {
  const { data: recommendationData, isFetching: recommendationFetching } =
    useGetAnimeRecommendationsByIdQuery(id);

  const { data: relationData, isFetching: relationFetching } =
    useGetAnimeRelationsByIdQuery(id);

  if (recommendationFetching && relationFetching) return <Loader />;
  if (relationData)
    return (
      <div className="mt-6">
        {recommendationData && (
          <RecommendationData data={recommendationData.data} />
        )}
        {relationData && <RelationData data={relationData.data} />}
      </div>
    );
};

export default SimilarCard;
