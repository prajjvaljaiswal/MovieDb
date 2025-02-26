import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Populer from "./components/pages/populer.js";
import TopRated from "./components/pages/topRated.js";
import Upcoming from "./components/pages/upcoming.js";
import { Header } from "./components/Header.js";
import Error from "./components/pages/error.js";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-zinc-900">
        <Header/>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/popular",
        element: <Populer />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
