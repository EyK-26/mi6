import React from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import PersonDetail from "./components/PersonDetail";

const App = () => {
    return (
        <div className="container">
            <Navigation />
            <HomePage />
        </div>
    );
};

export default App;
