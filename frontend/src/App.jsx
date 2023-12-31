import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />,

            errorElement: <ErrorPage />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/home",
            element: <HomePage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
