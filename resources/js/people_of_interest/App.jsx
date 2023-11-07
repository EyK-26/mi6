import React, { useState } from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";

const App = () => {
    const [content, setContent] = useState('')
    return (
        <div className="container">
            <Navigation setContent={setContent} />
            <HomePage content={content} />
        </div>
    );
};

export default App;
