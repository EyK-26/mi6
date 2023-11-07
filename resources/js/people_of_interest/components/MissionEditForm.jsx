import React, { useEffect, useState } from "react";

const MissionEditForm = ({ missionId, setMissionId }) => {
    const [values, setValues] = useState({
        name: "",
        outcome: "",
        year: "",
    });

    const loadMission = async () => {
        try {
            const response = await fetch(`/api/missions/${missionId}`);
            const data = await response.json();
            setValues(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadMission();
    }, []);

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`/api/missions/${missionId}/store`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(values)
        })
    }

    return (
        <form action="" method="post" onSubmit={handleSubmit}>
            <button onClick={() => setMissionId(null)}>&times;</button>
            <input onInput={handleChange} value={values.name} name="name" />
            <input
                onChange={handleChange}
                type="number"
                min="1900"
                max="2099"
                step="1"
                value={values.year}
                name="year"
            />
            <select value={values.outcome} onChange={handleChange} name="outcome">
                <option value="1">success</option>
                <option value="0">failure</option>
                <option value={null}>undefined</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default MissionEditForm;
