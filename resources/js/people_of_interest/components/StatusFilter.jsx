import React, { useEffect, useState } from "react";

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
    const [statuses, setStatuses] = useState([]);

    const fetchStatuses = async () => {
        const response = await fetch("/api/statuses");
        const data = await response.json();
        setStatuses(data);
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
