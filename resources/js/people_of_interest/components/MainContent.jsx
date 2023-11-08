import React, { useState } from "react";
import PersonDetail from "./PersonDetail";
import Welcome from "./Welcome";
import StatusFilter from "./StatusFilter";
import Missions from "./Missions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

const MainContent = () => {
    const [selectedStatus, setSelectedStatus] = useState("");
    

    return (
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route
                    path="/people-of-interest"
                    element={
                        <>
                            <StatusFilter
                                selectedStatus={selectedStatus}
                                setSelectedStatus={setSelectedStatus}
                            />
                            <PersonDetail selectedStatus={selectedStatus} />
                        </>
                    }
                />
                <Route path="/missions" element={<Missions />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element="page do not exist" />
            </Routes>
        </main>
    );
};

export default MainContent;
