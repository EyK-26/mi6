import React, { useState } from "react";

const Navigation = ({ setContent }) => {
    const [hidden, setHidden] = useState(false);

    const toggleNav = () => {
        setHidden(!hidden);
    };

    return (
        <>
            {hidden ? (
                ""
            ) : (
                <nav className="left-panel">
                    <div className="toggle-button" onClick={toggleNav}>
                        &lt;
                    </div>
                    <div className="logo"></div>
                    <a href="#" onClick={() => setContent("")}>
                        Home
                    </a>
                    <a
                        href="#people-of-interest"
                        onClick={() => setContent("people-of-interest")}
                    >
                        People of Interest
                    </a>
                <a href="#missions" onClick={() => setContent('missions')}>Missions</a>
                </nav>
            )}
            {hidden ? (
                <div className="button" onClick={toggleNav}>
                    &gt;
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Navigation;
