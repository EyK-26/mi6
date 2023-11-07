import React, { useEffect, useState } from "react";
import axios from "axios";

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
    const [statuses, setStatuses] = useState([]);

    const fetchStatuses = async () => {
        try {
            const response = await axios.get("/api/statuses");
            setStatuses(response.data);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        fetchStatuses();
    }, []);

    const handleClick = (id) => {
        setSelectedStatus(id);
    };

    return (
        <div style={{ display: "flex" }}>
            {statuses.map((status) => (
                <button
                    className={`status-filter__status${
                        selectedStatus == status.id ? "_selected" : ""
                    }`}
                    key={status.id}
                    onClick={handleClick.bind(null, status.id)}
                >
                    {status.name}
                </button>
            ))}
        </div>
    );
};

export default StatusFilter;
