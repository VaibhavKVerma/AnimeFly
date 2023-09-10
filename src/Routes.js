import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import DetailedData from "./components/DetailedData";
import Schedule from "./components/Schedule";
import UpcomingDev from "./components/UpcomingDev";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/anime/:id",
          element: <DetailedData />,
          loader: ({params}) => {
            return params.id;
          }
        },
        {
          path: "/schedule",
          element: <Schedule />
        },
        {
            path: "/upcomingdev",
            element: <UpcomingDev />
        },
        {
          path: "*",
          element: <ErrorPage />
        }
      ],
    },
  ]);

  export default router;