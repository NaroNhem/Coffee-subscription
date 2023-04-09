import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Subscribe from "./Components/Subscribe";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          index
          element={
            <Home
              home={<Link to="/">HOME</Link>}
              about={<Link to="/AboutUs"> ABOUT US</Link>}
              subscribe={<Link to="/Subscribe"> CREATE YOUR PLAN</Link>}
            />
          }
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Subscribe" element={<Subscribe />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
