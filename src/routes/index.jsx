import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Task44 from "../pages/Task44";
import ProductList from "../pages/Task45/ProductList";
import { Task46 } from "../pages/Task46";

const publicRoutes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/task44", element: <Task44 /> },
      { path: "/task45", element: <ProductList /> },
      { path: "/task46", element: <Task46 /> },
    ],
  },
];

export const router = createBrowserRouter([...publicRoutes]);
