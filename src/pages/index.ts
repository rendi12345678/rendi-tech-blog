import React from "react";

const Home = React.lazy(() => import("./Home"));
const Posts = React.lazy(() => import("./Posts"));
const NotFound = React.lazy(() => import("./NotFound"));

export { Home, Posts, NotFound };
