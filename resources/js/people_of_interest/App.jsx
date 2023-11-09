import React, { useReducer, useEffect, useState } from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/userContext";
import reducer from "./store/reducer";
import { User } from "./context/user";

const App = () => {
    const [userContext, setUserContext] = useReducer(reducer, {
        user: null,
        isRegistered: false,
        isLoggedIn: false,
        isLoggedOut: true,
        messages: null,
    });
    const [user, setUser] = useState(null);

    const loadUserStatus = async () => {
        const response = await fetch("/api/user", {
            headers: {
                Accept: "application/json",
            },
        });

        console.log(response);
        if (response.status === 200) {
            const data = await response.json();
            setUser(data);
        } else if (response.status === 401) {
            setUser(false);
        }
    };

    useEffect(() => {
        if (user === null) {
            loadUserStatus();
        }
    }, [user]);

    return (
        <User.Provider value={{ user, setUser }}>
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
        </User.Provider>
    );
};

export default App;
