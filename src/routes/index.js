import React, { lazy, Suspense } from "react";
import HeaderLayout from "../layouts/HeaderLayout";

const Home = lazy(() => import("../pages/Home"));

const routes = [
  {
    path: "/home",
    element: (
        <Suspense fallback={<div>add loading animation...</div>}>
          <Home />
        </Suspense>
    ),
    layout: HeaderLayout,
  },
];

export default routes;