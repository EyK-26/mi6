import React, { useState } from "react";
import PersonDetail from "./PersonDetail";
import StatusFilter from "./StatusFilter";
import Missions from "./Missions";

const HomePage = ({ content }) => {
    const [selectedStatus, setSelectedStatus] = useState("");

    return (
        <main className="main-content">
            {content === "" && <h1>Welcome to MI6</h1>}
            {content === "people-of-interest" && (
                <>
                    <StatusFilter
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                    />
                    <PersonDetail selectedStatus={selectedStatus} />
                </>
            )}
            {content === "missions" && <Missions />}
        </main>
    );
};

export default HomePage;
