import React, { useState } from "react";

const Navigation = ({ content, setContent }) => {
    const [hidden, setHidden] = useState(false);

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
                    <a
                        href="#"
                        onClick={() => setContent("")}
                        className={!content ? "current" : undefined}
                    >
                        Home
                    </a>
                    <a
                        href="#people-of-interest"
                        onClick={() => setContent("people-of-interest")}
                        className={
                            content === "people-of-interest"
                                ? "current"
                                : undefined
                        }
                    >
                        People of Interest
                    </a>
                    <a
                        href="#missions"
                        onClick={() => setContent("missions")}
                        className={
                            content === "missions" ? "current" : undefined
                        }
                    >
                        Missions
                    </a>
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
