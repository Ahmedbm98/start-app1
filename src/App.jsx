import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/PORTFOLIO/Portfolio";
import PageNotFound from "./Components/Page Not Found/PageNotFound";

export default function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <PageNotFound /> }
      ]
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
