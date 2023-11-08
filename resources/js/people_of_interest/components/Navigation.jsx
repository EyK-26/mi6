import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const [hidden, setHidden] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setHidden((prev) => !prev);
    };

    return (
        <>
            {!hidden && (
                <nav className="left-panel">
                    <div className="toggle-button" onClick={toggleNav}>
                        &lt;
                    </div>
                    <div className="logo"></div>
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "current" : ""}
                    >
                        Home
                    </Link>
                    <Link
                        to="/people-of-interest"
                        className={
                            location.pathname === "/people-of-interest"
                                ? "current"
                                : ""
                        }
                    >
                        people-of-interest
                    </Link>
                    <Link
                        to="/missions"
                        className={
                            location.pathname === "/missions" ? "current" : ""
                        }
                    >
                        missions
                    </Link>
                    <Link
                        to="/register"
                        className={
                            location.pathname === "/register" ? "current" : ""
                        }
                    >
                        register
                    </Link>
                    <Link
                        to="/login"
                        className={
                            location.pathname === "/login" ? "current" : ""
                        }
                    >
                        login
                    </Link>
                    <Link
                        to="/logout"
                        className={
                            location.pathname === "/logout" ? "current" : ""
                        }
                    >
                        logout
                    </Link>
                </nav>
            )}
            {hidden && (
                <div className="button" onClick={toggleNav}>
                    &gt;
                </div>
            )}
        </>
    );
};

export default Navigation;
