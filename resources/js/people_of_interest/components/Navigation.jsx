import React, { useState } from "react";

const Navigation = ({ setContent, setMissionId }) => {
	const [hidden, setHidden] = useState(false);

	const toggleNav = () => {
		setHidden(!hidden);
	};

	const handleClick = () => {
		setContent("missions");
		setMissionId(null);
	};

	return (
		<>
			{hidden ? (
				""
			) : (
				<nav className="left-panel">
					<div className="toggle-button" onClick={toggleNav}>
						&lt;
					</div>
					<div className="logo"></div>
					<a href="#" onClick={() => setContent("")}>
						Home
					</a>
					<a
						href="#people-of-interest"
						onClick={() => setContent("people-of-interest")}
					>
						People of Interest
					</a>
					<a href="#missions" onClick={handleClick}>
						Missions
					</a>
				</nav>
			)}
			{hidden ? (
				<div className="button" onClick={toggleNav}>
					&gt;
				</div>
			) : (
				""
			)}
		</>
	);
};

export default Navigation;
