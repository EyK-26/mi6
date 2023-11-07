import React, { useEffect, useState } from "react";
import MissionEditForm from "./MissionEditForm";

const Missions = () => {
    const [missions, setMissions] = useState([])
    const [missionId, setMissionId] = useState(null)

    const loadMissions = async () => {
        try {
            const response = await fetch('/api/missions');
            const data = await response.json();
            setMissions(data)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadMissions();
    }, [])

    return (
        <>
            {
                missionId === null
                    ? missions.map((mission) => <li key={mission.id} onClick={() => setMissionId(mission.id)}>{mission.name} : {mission.year} </li>)
                    : missionId && <MissionEditForm missionId={missionId} setMissionId={setMissionId} />
            }
        </>
    );
};

export default Missions;
