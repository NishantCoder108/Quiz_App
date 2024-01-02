import {
    createBrowserRouter,
    Link,
    RouterProvider,
    redirect,
    Navigate,
} from "react-router-dom";
import "./App.css";
// import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
// import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";
import PrivateRoutes from "./routes/PrivateRoutes";
// import PublicRoutes from "./routes/PublicRoutes";
// import { useSelector } from "react-redux";
import Signup from "./components/auth/Signup";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
    const isToken = useSelector((state) => state.auth?.token);

    const routes = [
        {
            element: <PrivateRoutes />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/about",
                    element: (
                        <div>
                            {" "}
                            <h1>about</h1> <Link to="/login">Login</Link>
                        </div>
                    ),
                },
                {
                    path: "*",
                    element: (
                        <h1>
                            NOt Found page , please go to home{" "}
                            <Link to="/">Home</Link>
                        </h1>
                    ),
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "*",
            element: <ErrorPage />,
        },
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
