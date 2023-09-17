import { weeks } from "../constants/Constants";
import Loader from "../utils/Loader";
import { useGetIPTimeQuery } from "../redux/currentTimeApi";
import { useLazyGetSchedulesQuery } from "../redux/animeListApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable */

const DataCard = ({ info }) => {
  return (
    <div key={info.mal_id}>
      <Link to={`/anime/${info.mal_id}`}>
        <div className="h-full p-5 rounded-xl bg-slate-300">
          <img
            className="h-[200px] w-[300px] object-cover rounded-xl"
            src={info.images.webp.large_image_url}
            alt=""
          />
          <div>{info.title_english || info.title}</div>
        </div>
      </Link>
    </div>
  );
};

const ScheduleInfo = ({ day }) => {
  const [getSchedules, { data: scheduleData }] =
    useLazyGetSchedulesQuery();
  const [selectedDay, setSelectedDay] = useState(day);
  const [data, setData] = useState(null);
  const [page] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    getSchedules({ filter: weeks[selectedDay], page });
    setData(null);
    setShowLoadMore(true);
  }, [selectedDay, getSchedules, setShowLoadMore]);

  useEffect(() => {
    if (scheduleData) {
      setData(scheduleData.data);
      if (!scheduleData.pagination.has_next_page) setShowLoadMore(false);
    }
  }, [scheduleData]);

  return (
    <div className="m-12">
      <div className="border-[1px] border-black flex bg-white rounded-lg">
        <div className="border-r-[1px] border-black">
          <div className="m-5">
            {weeks.map((week, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`${
                    idx === selectedDay ? "bg-slate-900 text-white" : ""
                  } cursor-pointer capitalize bg-slate-300 text-slate-700 text-center rounded-md p-3 mb-3 hover:bg-slate-900 hover:text-white transition-all`}
                >
                  {week}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full min-h-full">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3 p-3">
            {data && data.map((info) => <DataCard info={info} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const { data: currentTime, isFetching } = useGetIPTimeQuery();
  return isFetching ? (
    <Loader />
  ) : (
    <ScheduleInfo day={currentTime.day_of_week} />
  );
};
export default Schedule;
