import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Programs from "./pages/Programs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Programs",
        element: <Programs />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
