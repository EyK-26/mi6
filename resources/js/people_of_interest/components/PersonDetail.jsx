import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const PersonDetail = () => {
    const [personId, setPersonId] = useState(null);
    const [data, setData] = useState(null);

    const handleClick = (id) => {
        setPersonId(id);
    };

    const fetchAllPeople = async () => {
        const response = await fetch("/api/people");
        const data = await response.json();
        setData(data);
    };

    const fetchPerson = async () => {
        const response = await fetch(`/api/people/${personId}`);
        const data = await response.json();
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        fetchAllPeople();
    }, []);

    useEffect(() => {
        fetchPerson(personId);
    }, [personId]);

    const renderedPeople =
        data && data.length > 1
            ? data.map((el) => (
                  <p onClick={handleClick.bind(null, el.id)} key={el.id}>
                      {el.name}
                  </p>
              ))
            : console.log(data);

    return <div className="list">{!data ? "Loading..." : renderedPeople}</div>;
};

export default PersonDetail;
