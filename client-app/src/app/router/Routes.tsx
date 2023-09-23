import { lazily } from 'react-lazily';
import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";

const { ActivityDashboard } = lazily(() => import('../../features/activities/dashboard/ActivityDashboard'))
const { ActivityForm } = lazily(() => import('../../features/activities/form/ActivityForm'))
const { ActivityDetails } = lazily(() => import("../../features/activities/details/ActivitiesDetails"))
const { TestErrors } = lazily(() => import("../../features/errors/TestError"))
const { NotFound } = lazily(() => import("../../features/errors/NotFound"))
const { ServerError } = lazily(() => import("../../features/errors/ServerError"))
const { LoginForm } = lazily(() => import("../../features/users/LoginForm"))
const { ProfilePage } = lazily(() => import("../../features/profiles/ProfilePage"))

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'activities',
                element: <ActivityDashboard />
            },
            {
                path: 'activities/:id',
                element: <ActivityDetails />
            },
            {
                path: '/createActivity',
                element: <ActivityForm key='create' />
            },
            {
                path: '/manage/:id',
                element: <ActivityForm key='manage' />
            },
            {
                path: '/profiles/:username',
                element: <ProfilePage />
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/errors',
                element: <TestErrors />
            },
            {
                path: '/not-found',
                element: <NotFound />
            },
            {
                path: '/server-error',
                element: <ServerError />
            },
            {
                path: '*',
                element: <Navigate replace to='/not-found' />
            },
        ]
    },
];

export const router = createBrowserRouter(routes);