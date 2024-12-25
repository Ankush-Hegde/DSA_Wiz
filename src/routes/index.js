import React, { lazy, Suspense } from "react";
import HeaderLayout from "../layouts/HeaderLayout";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = lazy(() => import("../pages/Home"));

const routes = [
  {
    path: "/home",
    element: (
        <Suspense fallback={<LoadingSpinner/>}>
          <Home />
        </Suspense>
    ),
    layout: HeaderLayout,
  },
];

export default routes;