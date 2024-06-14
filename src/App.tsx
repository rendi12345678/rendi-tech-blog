import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./sections";
import { Home, NotFound, Posts } from "./pages";
import { Suspense } from "react";

interface MyRoute {
  path: string;
  element: JSX.Element;
  exact?: boolean;
}
const routes: MyRoute[] = [
  { path: "/", element: <Home />, exact: true },
  { path: "/posts/:title", element: <Posts /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
