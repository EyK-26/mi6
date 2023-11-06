import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const PersonDetail = () => {
    const [personId, setPersonId] = useState(null);
    const [data, setData] = useState(null);

    const fetchAllPeople = async () => {
        const response = await fetch("/api/people");
        const data = await response.json();
        setData(data);
    };

    const fetchPerson = async (personId) => {
        const response = await fetch(`/api/people${personId}`);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        fetchAllPeople();
    }, []);

    const renderedPeople =
        data && data.map((el) => <p key={el.id}>{el.name}</p>);

    return <div>{!data ? "Loading..." : renderedPeople}</div>;
};

export default PersonDetail;
