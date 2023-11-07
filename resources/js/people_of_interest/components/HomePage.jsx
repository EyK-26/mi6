import React, { useState } from "react";
import PersonDetail from "./PersonDetail";
import StatusFilter from "./StatusFilter";

const HomePage = () => {
    const [selectedStatus, setSelectedStatus] = useState("");

    return (
        <main className="main-content">
            <h1>Welcome to MI6</h1>
            <StatusFilter
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />
            <PersonDetail selectedStatus={selectedStatus} />
        </main>
    );
};

export default HomePage;
