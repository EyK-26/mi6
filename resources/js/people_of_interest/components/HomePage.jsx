import React, { useState } from "react";
import PersonDetail from "./PersonDetail";
import StatusFilter from "./StatusFilter";
import Missions from "./Missions";

const HomePage = ({ content, missionId, setMissionId }) => {
	const [selectedStatus, setSelectedStatus] = useState("");

	let activeContent;

	switch (content) {
		case "":
			activeContent = <h1>Welcome to MI6</h1>;
			break;
		case "people-of-interest":
			activeContent = (
				<>
					<StatusFilter
						selectedStatus={selectedStatus}
						setSelectedStatus={setSelectedStatus}
					/>
					<PersonDetail selectedStatus={selectedStatus} />
				</>
			);
			break;
		case "missions":
			activeContent = (
				<Missions missionId={missionId} setMissionId={setMissionId} />
			);
			break;
		default:
			break;
	}

	return <main className="main-content">{activeContent}</main>;
};

export default HomePage;
