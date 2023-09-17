import { useState } from "react";
import { useGetStaffsByIdQuery } from "../redux/animeListApi";
import { LoaderSmall } from "../utils/Loader";

const StaffData = ({ data }) => {
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
                  src={ele.person.images.jpg.image_url}
                  alt={ele.person.name}
                />
                <div className="mt-1 mb-3 font-semibold text-slate-600">
                  {ele.person.name.split(", ").reverse().join(" ")}
                </div>
                {ele.positions.map((position, idx) => {
                  return (
                    <li key={idx} className="mt-1 mb-1 font-semibuld text-slate-600">
                      {position}
                    </li>
                  );
                })}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

const StaffInfo = ({ id }) => {
  const { data, isFetching } = useGetStaffsByIdQuery(id);
  if (isFetching) return <LoaderSmall />;
  return data ? <StaffData data={data.data} /> : null;
};

export default StaffInfo;
