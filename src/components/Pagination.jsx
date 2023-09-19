import { useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../Constants/Svg";
// import { animeListApi } from "../redux/animeListApi";
// import { createSelector } from "@reduxjs/toolkit";

const Pagination = () => {
  // TODO extract data from redux state
  // console.log(animeListApi.endpoints.getTopAnime.select().toString());

  const normalCss =
    "mx-1 flex h-9 w-9 items-center justify-center rounded-full transition duration-150 ease-in-out cursor-pointer border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 hover:bg-slate-300";
  const activeCss =
    "mx-1 flex h-9 w-9 items-center justify-center rounded-full transition duration-150 ease-in-out cursor-pointer bg-pink-500 p-0 text-sm text-white shadow-md";

  const [active, setActive] = useState(1);
  const [paginationList, setPaginationList] = useState([1, 2, 3]);
  const min = 1;
  const max = 4;
  const onClickHandler = (e) => {
    setActive(e.target.value);
  };

  const updatePaginationList = (value) => {
    const newPagination = paginationList.map((ele) => ele + value);
    setPaginationList(newPagination);
  };

  return (
    <nav>
      <ul className="flex justify-center mb-3">
        <button
          disabled={paginationList[0] === min}
          onClick={() => {
            updatePaginationList(-1);
          }}
          className={normalCss}
        >
          <LeftArrowIcon />
        </button>
        {paginationList.map((idx) => (
          <li
            onClick={onClickHandler}
            value={idx}
            className={active === idx ? activeCss : normalCss}
          >
            {idx}
          </li>
        ))}
        <button
          disabled={paginationList[paginationList.length - 1] === max}
          onClick={() => {
            updatePaginationList(1);
          }}
          className={normalCss}
        >
          <RightArrowIcon />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
