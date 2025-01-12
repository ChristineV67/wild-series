import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Programs from "./pages/Porgrams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Programs",
        element: <Programs />,
        loader: () => fetch("http://localhost:3310/api/programs"),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
