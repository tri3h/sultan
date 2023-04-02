import React, { FC } from "react";
import CatalogPage from "./pages/catalog/CatalogPage";
import "./App.css";
import AppRouter from "./components/appRouter/AppRouter";

const App: FC = () => {
    return (
        <div>
            <AppRouter />
        </div>
    );
};

export default App;
