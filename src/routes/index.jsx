import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Task44 from "../pages/Task44";
import ProductList from "../pages/Task45/ProductList";

const publicRoutes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/task44", element: <Task44 /> },
      { path: "/task45", element: <ProductList /> },
    ],
  },
];

export const router = createBrowserRouter([...publicRoutes]);
