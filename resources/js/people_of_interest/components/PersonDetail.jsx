import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const PersonDetail = ({ selectedStatus }) => {
	const [personId, setPersonId] = useState(null);
	const [data, setData] = useState(null);

	const handleClick = (id) => {
		setPersonId(id);
	};

	const handleClose = () => {
		setPersonId(null);
	};

	const fetchAllPeople = async () => {
		try {
			const response = await axios.get(
				`/api/people?status=${encodeURIComponent(selectedStatus)}`
			);
			setData(response.data);
		} catch (err) {
			console.log(err.response);
		}
	};

	const fetchPerson = async () => {
		if (!personId) return;
		const response = await fetch(`/api/people/${personId}`);
		const data = await response.json();
		console.log(data);
		setData(data);
	};

	useEffect(() => {
		if (!personId) {
			fetchAllPeople();
		} else if (personId) {
			fetchPerson(personId);
		}
	}, [personId, selectedStatus]);

	const renderedPeople =
		data && !personId && data.length > 1 ? (
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
			<div style={{ display: "flex" }}>
				<p>{data?.name}</p> <p>{data?.status_text}</p>
				<img src={"images/" + data?.image?.path} alt={data?.name} />
				<span onClick={handleClose} style={{ cursor: "pointer" }}>
					x
				</span>
			</div>
		);

	return <div className="list">{!data ? "Loading..." : renderedPeople}</div>;
};

export default PersonDetail;
