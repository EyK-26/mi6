import axios from "axios";
import React, { useState, useEffect } from "react";
import MissionPeople from "./MissionPeople";

const MissionEditForm = ({ missionId, setMissionId }) => {
    const [mission, setMission] = useState(null);
    const [success, setSuccess] = useState(null);

    const fetchMission = async () => {
        try {
            const response = await axios.get(`/api/missions/${missionId}`);
            setMission(response.data);
        } catch (err) {
            console.log(err.response);
        }
    };

    const handleSubmit = async (ev) => {
        try {
            ev.preventDefault();
            const data = await axios.post(
                `/api/missions/${missionId}/update`,
                mission
            );
            setSuccess(data.data.message);
        } catch (err) {
            console.log(err.response.data.message);
            setSuccess(err.response.data.message);
        }
    };

    const convertOutcome = (outComeObject) => {
        console.log(outComeObject);
        return outComeObject == null
            ? "unknown"
            : outComeObject == 0
            ? "failed"
            : outComeObject
            ? "success"
            : undefined;
    };

    useEffect(() => {
        fetchMission();
    }, []);

    const handleChange = (ev) => {
        setMission((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };

    return (
        <>
            {success && <span>{success}</span>}
            {mission ? (
                <>
                    <h2>Mission Detail</h2>
                    <ul>
                        <li>{mission.name}</li>
                        <li>{mission.year}</li>
                        <li>{convertOutcome(mission.outcome)}</li>
                        <div className="people-list">
                            <MissionPeople missionPeopleList={mission.people} />
                        </div>
                    </ul>
                    <br />
                    <h3>Edit the mission</h3>
                    <hr />
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <label htmlFor="name">name</label>
                        <input
                            style={{ width: "15em" }}
                            type="text"
                            name="name"
                            value={mission.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="year">year</label>
                        <input
                            style={{ width: "15em" }}
                            type="number"
                            name="year"
                            value={mission.year}
                            onChange={handleChange}
                        />
                        <label htmlFor="outcome">outcome</label>
                        <select
                            name="outcome"
                            value={mission.outcome}
                            onChange={handleChange}
                        >
                            <option value="">Unknown</option>
                            <option value={1}>Successful</option>
                            <option value={0}>Failure</option>
                        </select>
                        <button type="submit">Update Mission</button>
                    </form>
                    <button onClick={() => setMissionId(0)}>Cancel</button>
                </>
            ) : (
                "Loading form"
            )}
        </>
    );
};

export default MissionEditForm;
