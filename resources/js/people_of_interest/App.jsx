import React, { useState } from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";

const App = () => {
    const [content, setContent] = useState("");
    return (
        <div className="container">
            <Navigation content={content} setContent={setContent} />
            <MainContent content={content} />
        </div>
    );
};

export default App;
