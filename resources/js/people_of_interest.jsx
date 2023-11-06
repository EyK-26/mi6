import React from "react";

import { createRoot } from "react-dom/client";
import App from "./people_of_interest/App";

export default function ReactAppName() {
    return <App />;
}

const container = document.getElementById("root");

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<ReactAppName />);
