import React, { useEffect, useState } from "react";
import axios from "axios";
import MissionEditForm from "./MissionEditForm";

const Missions = () => {
    const [data, setData] = useState([]);
    const [missionId, setMissionId] = useState(0);

    const fetchMissions = async () => {
        try {
            const response = await axios.get(`/api/missions`);
            setData(response.data);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        fetchMissions();
    }, []);

    return (
        <div className="list">
            {!missionId ? (
                !data ? (
                    "Loading"
                ) : (
                    data.map((el) => (
                        <p
                            style={{ cursor: "pointer" }}
                            onClick={() => setMissionId(el.id)}
                            key={el.id}
                        >
                            {el.name}
                        </p>
                    ))
                )
            ) : (
                <MissionEditForm
                    missionId={missionId}
                    setMissionId={setMissionId}
                />
            )}
        </div>
    );
};

export default Missions;
