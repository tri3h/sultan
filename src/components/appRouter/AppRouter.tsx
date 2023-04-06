import { Routes, Route, Navigate } from "react-router-dom";
import { routes, RouteNames } from "../../routes/index";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.path}
                />
            ))}
            <Route
                path="*"
                element={<Navigate to={RouteNames.CATALOG} replace />}
            />
        </Routes>
    );
};

export default AppRouter;
