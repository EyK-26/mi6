import React, { useEffect, useState } from "react";
import axios from "axios";

const People = ({ missionId, fetchMission, setSuccess }) => {
    const [people, setPeople] = useState([]);
    const [personId, setPersonId] = useState(0);
    const [assignCount, setAssignCount] = useState(0);

    const handleAssignmentOfPeople = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(`/api/missions/assign-person`, {
                personId,
                missionId,
            });
            setAssignCount((prev) => prev + 1);
            setSuccess(data.data.message);
        } catch (err) {
            console.log(err.response);
            setSuccess(err.response.data.message);
        }
    };

    const handleChange = (e) => {
        setPersonId(e.target.value);
    };

    useEffect(() => {
        if (assignCount) {
            fetchMission();
        }
    }, [assignCount]);

    const fetchPeople = async () => {
        try {
            const response = await axios.get(`/api/people`);
            setPeople(response.data);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <div>
            <form onSubmit={handleAssignmentOfPeople}>
                <select
                    name="people"
                    id="people"
                    value={personId}
                    onChange={handleChange}
                >
                    <option value={null}>Select a person</option>
                    {people &&
                        people?.map((person) => {
                            return (
                                <option key={person.id} value={person.id}>
                                    {person.name}
                                </option>
                            );
                        })}
                </select>
                <button type="submit">Assign</button>
            </form>
        </div>
    );
};

export default People;
