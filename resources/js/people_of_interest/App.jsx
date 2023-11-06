import React from "react";
import "../../css/app.scss";

const App = () => {
    return (
        <>
            <div className="container">
                <div className="left-panel">
                    <div className="toggle-button">&lt;</div>
                    <div className="logo"></div>
                    <a href="#">Home</a>
                    <a href="#people-of-interest">People of Interest</a>
                </div>
                <div className="main-content">
                    <h1>Welcome to MI6</h1>
                </div>
            </div>
        </>
    );
};

export default App;
