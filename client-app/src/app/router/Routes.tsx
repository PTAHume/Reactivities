import { lazily } from "react-lazily";
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { RequireAuth } from "./RequireAuth.tsx";

const { ActivityDashboard } = lazily(
  () => import("../../features/activities/dashboard/ActivityDashboard.tsx"),
);
const { ActivityForm } = lazily(
  () => import("../../features/activities/form/ActivityForm.tsx"),
);
const { ActivityDetails } = lazily(
  () => import("../../features/activities/details/ActivitiesDetails.tsx"),
);
const { TestErrors } = lazily(
  () => import("../../features/errors/TestError.tsx"),
);
const { NotFound } = lazily(() => import("../../features/errors/NotFound.tsx"));
const { ServerError } = lazily(
  () => import("../../features/errors/ServerError.tsx"),
);
const { LoginForm } = lazily(
  () => import("../../features/users/LoginForm.tsx"),
);
const { ProfilePage } = lazily(
  () => import("../../features/profiles/ProfilePage.tsx"),
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: "activities",
            element: <ActivityDashboard />,
          },
          {
            path: "activities/:id",
            element: <ActivityDetails />,
          },
          {
            path: "/createActivity",
            element: <ActivityForm key="create" />,
          },
          {
            path: "/manage/:id",
            element: <ActivityForm key="manage" />,
          },
          {
            path: "/profiles/:username",
            element: <ProfilePage />,
          },
          {
            path: "/errors",
            element: <TestErrors />,
          },
        ],
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/server-error",
        element: <ServerError />,
      },
      {
        path: "*",
        element: <Navigate replace to="/not-found" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
