import React, { useState } from "react";

const Navigation = () => {
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
                    <a href="#">Home</a>
                    <a href="#people-of-interest">People of Interest</a>
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
