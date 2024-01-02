import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CustomLoader from "../components/common/CustomLoader.jsx";
// import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <Suspense fallback={<CustomLoader />}>
                <Outlet />
            </Suspense>
        </>
    );
}
