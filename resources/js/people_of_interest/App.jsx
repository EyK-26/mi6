import React, { useState } from "react";
import "../../css/app.scss";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";

const App = () => {
	const [content, setContent] = useState("");
	const [missionId, setMissionId] = useState(null);

	return (
		<div className="container">
			<Navigation
				content={content}
				setContent={setContent}
				missionId={missionId}
				setMissionId={setMissionId}
			/>
			<HomePage
				content={content}
				missionId={missionId}
				setMissionId={setMissionId}
			/>
		</div>
	);
};

export default App;
