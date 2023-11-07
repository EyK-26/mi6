import React, { useEffect, useState } from "react";
import axios from "axios";
import MissionPeople from "./MissionPeople";
import MissionEditForm from "./MissionEditForm";

const Missions = () => {
    const [data, setData] = useState(null);
    const [selectedMission, setSelectedMission] = useState(0);
    const [updated, setUpdated] = useState(false);

    const fetchMissions = async () => {
        try {
            const response = await axios.get(
                `/api/missions/${encodeURIComponent(selectedMission || "")}`
            );
            setData(response.data);
        } catch (err) {
            console.log(err.response);
        }
    };

    const handleClick = (id) => {
        setSelectedMission(id);
    };

    const handleClose = () => {
        setSelectedMission(0);
    };

    useEffect(() => {
        fetchMissions();
    }, [selectedMission]);

    const renderedMissions =
        data && !selectedMission && data.length > 1 ? (
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
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                    onClick={handleClose}
                    style={{ cursor: "pointer", color: "red" }}
                >
                    Click to Close
                </span>
                <p>{data?.name}</p>
                <p>{data?.year}</p>
                <p>
                    {data && !data?.outcome && data?.outcome !== null
                        ? "failed"
                        : data?.outcome === null
                        ? "we do not know and we do not care"
                        : data?.outcome
                        ? "success"
                        : undefined}
                </p>
                <MissionPeople missionPeopleList={data?.people} />
                {!selectedMission || (
                    <div className="mission__form--edit">
                        <MissionEditForm
                            setUpdated={setUpdated}
                            missionId={selectedMission}
                            data={data}
                        />
                    </div>
                )}
            </div>
        );

    return (
        <>
            <div className="list">
                {!data ? "Missions Loading..." : renderedMissions}
            </div>
        </>
    );
};

export default Missions;
