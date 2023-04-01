import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";

const AnimatedRoutes = ({ personalDetails }) => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing name={"Sai Chandan Kadarla"} tagline={"personalDetails.tagline"} />} />
            <Route
                path="/about"

            />
            <Route path="/portfolio" />
            <Route
                path="/contact"

            />
        </Routes>
    );
};

export default AnimatedRoutes;
