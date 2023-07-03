import { useLoaderData } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../redux/animeListApi";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const DetailedData = () => {
  const id = useLoaderData();
  const { data, isFetching, error } = useGetAnimeFullByIdQuery(id);
  if (error) return <ErrorPage />;
  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : data ? (
        <div>{data.data.title_english}</div>
      ) : null}
    </div>
  );
};

export default DetailedData;
