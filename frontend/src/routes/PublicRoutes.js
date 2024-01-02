import { Navigate } from "react-router-dom";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

export default function PublicRoutes() {
    return [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "*", element: <Navigate to="/login" replace /> },
    ];
}
