import React, { useReducer } from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/userContext";
import reducer from "./store/reducer";

const App = () => {
    const [userContext, setUserContext] = useReducer(reducer, {
        user: null,
        isRegistered: false,
        isLoggedIn: false,
        isLoggedOut: true,
        messages: null,
    });

    return (
        <UserContext.Provider
            value={{ state: userContext, dispatch: setUserContext }}
        >
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
