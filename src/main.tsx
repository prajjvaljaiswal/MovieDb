import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Populer from "./components/pages/populer.js";
import TopRated from "./components/pages/topRated.js";
import Upcoming from "./components/pages/upcoming.js";
import MovieDetail from "./components/pages/movieDetail.js";
import Error from "./components/pages/error.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Browse from "./components/pages/Browse.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/popular",
    element: <Populer />,
    errorElement: <Error />
  },
  {
    path: "/top-rated",
    element: <TopRated />,
    errorElement: <Error />
  },
  {
    path: "/upcoming",
    element: <Upcoming />,
    errorElement: <Error />
  },{
    path: "/movie/:id",
    element: <MovieDetail/>,
    errorElement: <Error/>
  },{
    path: "/browse/:name",
    element:<Browse/>,
    errorElement: <Error/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <Provider store={appStore}>
        <RouterProvider router={router}/>
      </Provider>
  </StrictMode>
);
