// import { lazy } from "react";
import { Navigate, redirect } from "react-router-dom";
// import Layout from "./Layout.js";
// import HomePage from "../components/HomePage";
import { useSelector } from "react-redux";
import Layout from "./Layout";
// import { useEffect } from "react";
// const HomePage = lazy(() => import("../components/HomePage"));

// export default function privateRoutes() {
//     return {
//         element: <Layout />,
//         children: [
//             { path: "/", element: <HomePage /> },
//             { path: "/settings", element: <h1>setting Page </h1> },
//             { path: "*", element: <Navigate to="/" replace /> },
//         ],
//     };
// }

const PrivateRoutes = () => {
    const isToken = useSelector((state) => state.auth?.token);

    // const location = useLocation();

    if (!isToken) {
        redirect("/login");
    }

    return isToken ? <Layout /> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoutes;
