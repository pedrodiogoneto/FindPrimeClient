import React, { lazy } from 'react'

const Homepage = React.lazy(() => import("../views/Homepage"));
const Error404 =  React.lazy(() => import("../views/Error404"))

const indexRoutes = [
  { exact: "true", path: "/", name: "Homepage", component: Homepage},
  { path: "/", name: "Error404", component: Error404 },
];

export default indexRoutes;
