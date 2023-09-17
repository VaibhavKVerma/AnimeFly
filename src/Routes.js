import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AnimeData from "./pages/AnimeData";
import Schedule from "./pages/Schedule";
import UpcomingDev from "./pages/UpcomingDev";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/anime/:id",
          element: <AnimeData />,
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
          element: <Error />
        }
      ],
    },
  ]);

  export default router;