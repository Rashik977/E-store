import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import EverworldStories from "./pages/EverworldStories";
import Products from "./pages/Products";
import Product from "./pages/Product";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/everworld-stories",
        element: <EverworldStories />,
      },
      {
        path: "/store/men's clothing",
        element: <Products category="men's clothing" />,
      },
      {
        path: "/store/women's clothing",
        element: <Products category="women's clothing" />,
      },
      {
        path: "/store/jewelery",
        element: <Products category="jewelery" />,
      },
      {
        path: "/store/electronics",
        element: <Products category="electronics" />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
    ],
  },
]);
