import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from '../pages/home'

export default function Router() {
    const pathname = useAppContext

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}