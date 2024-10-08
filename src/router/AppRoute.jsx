import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import MainLayouts from "../components/layout/MainLayouts";
import Error404 from "../components/Error404/Error404";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PostDetails from "../components/Posts/PostDetails";
import CreatePost from "../components/Posts/CreatePost";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import DashboardMain from "../components/Dashboard/DashboardMain";
import Users from "../components/Dashboard/Users";
import PostsDashboard from "../components/Dashboard/Posts";
import Comments from "../components/Dashboard/Comments";
import RequireAuth from "../Auth/ProtectedRoute/RequireAuth";
import Auth from "../Auth/ProtectedRoute/Auth";
import AuthAdmin from "../Auth/ProtectedRoute/AuthAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "create-post",
        element: <RequireAuth element={<CreatePost />} />,
      },
      {
        path: "posts/post-details/:id",
        element: <PostDetails />,
      },
      {
        path: "login",
        element: <Auth element={<Login />} />,
      },
      {
        path: "register",
        element: <Auth element={<Register />} />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <AuthAdmin element={<Dashboard />} />,
        children: [
          {
            index: true,
            element: <DashboardMain />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "posts",
            element: <PostsDashboard />,
          },
          {
            path: "comments",
            element: <Comments />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
