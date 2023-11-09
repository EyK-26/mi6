import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";

const MissionPeople = ({
    missionId,
    missionPeopleList,
    setSuccess,
    fetchMission,
}) => {
    const [unassignCount, setUnassignCount] = useState(0);

    const unassignAgent = async (e, id, missionId) => {
        e.preventDefault();
        try {
            const data = await axios.post(`/api/missions/unassign-person`, {
                personId: id,
                missionId,
            });
            setUnassignCount((prev) => prev + 1);
            setSuccess(data.data.message);
        } catch (err) {
            console.log(err.response);
            setSuccess(err.response.data.message);
        }
    };

    useEffect(() => {
        if (unassignCount) {
            fetchMission();
        }
    }, [unassignCount]);

    return (
        <Fragment>
            <div>Working agents</div>
            <ul>
                {missionPeopleList &&
                    missionPeopleList.map((el) => (
                        <div style={{ display: "flex" }} key={el.id}>
                            <li>{el.name}</li>
                            <span
                                onClick={(e) =>
                                    unassignAgent(e, el.id, missionId)
                                }
                                style={{
                                    color: "red",
                                    cursor: "pointer",
                                    marginLeft: "1.5em",
                                }}
                            >
                                X
                            </span>
                        </div>
                    ))}
            </ul>
        </Fragment>
    );
};

export default MissionPeople;
