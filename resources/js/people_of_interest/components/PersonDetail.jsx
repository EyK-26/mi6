import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const PersonDetail = ({ selectedStatus }) => {
    const [personId, setPersonId] = useState(null);
    const [data, setData] = useState(null);

    const handleClick = (id) => {
        setPersonId(id);
    };

    const handleClose = () => {
        setPersonId(null);
    };

    const fetchAllPeople = async () => {
        const response = await fetch(
            `/api/people?status=${encodeURIComponent(selectedStatus)}`
        );
        const data = await response.json();
        setData(data);
    };

    const fetchPerson = async () => {
        if (!personId) return;
        const response = await fetch(`/api/people/${personId}`);
        const data = await response.json();
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        if (!personId) {
            fetchAllPeople();
        } else if (personId) {
            fetchPerson(personId);
        }
    }, [personId, selectedStatus]);

    const renderedPeople =
        data && !personId && data.length > 1 ? (
            data.map((el) => (
                <p
                    style={{ cursor: "pointer" }}
                    onClick={handleClick.bind(null, el.id)}
                    key={el.id}
                >
                    {el.name}
                </p>
            ))
        ) : (
            <div style={{ display: "flex" }}>
                <p>{data?.name}</p> <p>{data?.status_text}</p>
                <img src={"images/" + data?.image?.path} alt={data?.name} />
                <span onClick={handleClose} style={{ cursor: "pointer" }}>
                    x
                </span>
            </div>
        );

    return <div className="list">{!data ? "Loading..." : renderedPeople}</div>;
};

export default PersonDetail;
