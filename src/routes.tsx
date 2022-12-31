import Layout from "@/pages/Layout";
import Loign from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Layout/Home";
import Follows from "@/pages/Layout/Follows";
import Profile from "@/pages/Layout/Profile";
import Publish from "@/pages/Layout/Publish";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "follows",
        element: <Follows />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "publish",
        element: <Publish />,
      },
    ],
  },
  {
    path: "/login",
    element: <Loign />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default routes;
