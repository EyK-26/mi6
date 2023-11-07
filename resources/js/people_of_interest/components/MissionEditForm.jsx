import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MissionEditForm({ missionId, setMissionId }) {
	const [data, setData] = useState(null);
	const [message, setMessage] = useState(null);

	const handleChange = (e) => {
		setData((origValues) => {
			return { ...origValues, [e.target.name]: e.target.value };
		});
	};

	const fetchMission = async () => {
		if (!missionId) return;
		try {
			const response = await axios.get(`/api/missions/${missionId}`);
			setData(response.data);
		} catch (err) {
			console.log(err.response);
		}
	};

	const sendData = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"/api/missions/" + missionId + "/update",
				data
			);
			setMessage(response.data["message"]);
		} catch (error) {
			setMessage(error.response.data["message"]);
		}
	};

	useEffect(() => {
		fetchMission();
	}, []);

	let selectDefaultValue;
	if (data) {
		switch (data.outcome) {
			case null:
				selectDefaultValue = null;
				break;
			case 1:
				selectDefaultValue = true;
				break;
			case 0:
				selectDefaultValue = false;
				break;
		}
	}

	return (
		<>
			<h1>Edit form for mission #{missionId}</h1>
			<button onClick={() => setMissionId(null)}>&times;</button>
			{data ? (
				<div>
					{message ? <span>{message}</span> : ""}
					<form onSubmit={sendData}>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							value={data.name}
							onChange={handleChange}
							className="missions-list__form-input"
						/>
						<label>Year:</label>
						<input
							type="number"
							name="year"
							value={data.year}
							onChange={handleChange}
							className="missions-list__form-input"
						/>
						<label>Outcome:</label>
						<select
							name="outcome"
							className="missions-list__form-input"
							onChange={handleChange}
							defaultValue={selectDefaultValue}
						>
							<option value={null}>Unknown</option>
							<option value={true}>Successful</option>
							<option value={false}>Failure</option>
						</select>
						<button type="submit">Update</button>
					</form>
				</div>
			) : (
				"Loading..."
			)}
		</>
	);
}
