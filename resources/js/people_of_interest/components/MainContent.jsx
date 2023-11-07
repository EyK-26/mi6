import React, { useState } from "react";
import PersonDetail from "./PersonDetail";
import Welcome from "./Welcome";
import StatusFilter from "./StatusFilter";
import Missions from "./Missions";

const MainContent = ({ content }) => {
    const [selectedStatus, setSelectedStatus] = useState("");

    return (
        <main className="main-content">
            {!content ? (
                <Welcome />
            ) : content === "people-of-interest" ? (
                <>
                    <StatusFilter
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                    />
                    <PersonDetail
                        selectedStatus={selectedStatus}
                        content={content}
                    />
                </>
            ) : content === "missions" ? (
                <Missions />
            ) : (
                "not found"
            )}
        </main>
    );
};

export default MainContent;
