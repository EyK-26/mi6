import React, { useState, useEffect } from "react";
import axios from "axios";
import MissionEditForm from "./MissionEditForm";

export default function Missions({ missionId, setMissionId }) {
	const [data, setData] = useState(null);

	const fetchMissions = async () => {
		try {
			const response = await axios.get(`/api/missions`);
			setData(response.data);
			console.log(data);
		} catch (err) {
			console.log(err.response);
		}
	};

	useEffect(() => {
		fetchMissions();
	}, [missionId]);

	const renderedMissions =
		missionId !== null ? (
			<MissionEditForm missionId={missionId} setMissionId={setMissionId} />
		) : data ? (
			data.map((mission) => {
				return (
					<p
						style={{ cursor: "pointer" }}
						key={mission.id}
						onClick={() => setMissionId(mission.id)}
					>
						{mission.name} ({mission.year})
					</p>
				);
			})
		) : (
			"Loading..."
		);

	return (
		<div className="list">
			<h1>Missions</h1>
			{renderedMissions}
		</div>
	);
}
