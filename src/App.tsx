import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./sections";
import { Home, NotFound, Posts } from "./pages";

interface MyRoute {
  path: string;
  element: JSX.Element;
  exact?: boolean;
}

const routes: MyRoute[] = [
  { path: "/", element: <Home />, exact: true },
  { path: "/posts/:id", element: <Posts /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
