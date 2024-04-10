import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, NoPageFound, LandingPageLayout, Error } from "./pages";
// import { NextUIProvider } from "@nextui-org/react";
import "./assets/css/pages/main.css";

const Loader = React.lazy(() => import("./components/loader/Loader"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NoPageFound />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <Loader
          failureMessage="Falha ao carregar!"
          canRetry={true}
          onComplete={() => console.log("Completo o carregamento!")}
          onErrored={() => console.log("Erro ao completar o carregamento!")}
        ></Loader>
      }
    >
        <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
