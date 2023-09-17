import React, { useState } from "react";
import { useGetReviewsByIdQuery } from "../redux/animeListApi";
import { LoaderSmall } from "../utils/Loader";

const Review = ({ review }) => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div className="flex border-2 bg-slate-300 rounded-xl py-5">
      <div className="flex-1 px-2">
        <img
          className="h-[100px] m-auto rounded-md"
          src={review.user.images.webp.image_url}
          alt=""
        />
        <div className="text-center font-semibold capitalize">
          {review.user.username}
        </div>
        <div className="text-center font-semibold text-slate-700">
          Rating : {review.score}/10
        </div>
      </div>
      <div className="flex-[8] pr-3">
        <div
          className="text-slate-800"
          dangerouslySetInnerHTML={{
            __html: showMore
              ? `${review.review.substring(0, 700)}....`
              : review.review,
          }}
        ></div>
        <p
          className="cursor-pointer font-semibold hover:text-blue-500"
          onClick={() => setShowMore(!showMore)}
        >
          Show {showMore ? "More" : "Less"}
        </p>
      </div>
    </div>
  );
};

const ReviewData = ({ data }) => {
  return (
    <div className="mt-6">
      {data.map((review, idx) => (
        <Review review={review} key={idx} />
      ))}
    </div>
  );
};

const ReviewCard = ({ id }) => {
  const { data, isFetching } = useGetReviewsByIdQuery(id);
  if (isFetching) return <LoaderSmall />;
  return data ? <ReviewData data={data.data} /> : null;
};

export default React.memo(ReviewCard);
