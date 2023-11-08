import React, { useState } from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/userContext";

const App = () => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <div className="container">
                    <Navigation />
                    <MainContent />
                </div>
            </BrowserRouter>
        </UserContext.Provider>
    );
};

export default App;
