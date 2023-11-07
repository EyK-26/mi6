import axios from "axios";
import React, { useState } from "react";

const MissionEditForm = ({ missionId, data, setUpdated }) => {
    const [values, setValues] = useState({
        name: "",
        year: "",
        outcome: "",
    });

    const handleChange = (ev) => {
        setValues((prev) => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }));
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const data = await axios.post(`/api/missions/${missionId}/update`, {
            ...values,
            name: values.name,
            year: values.year,
            outcome: values.outcome,
        });

        console.log(data);
    };

    return (
        <>
            <h3>Edit the mission</h3>

            <form action="" method="post" onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input
                    style={{ width: "15em" }}
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder={data.name}
                />
                <label htmlFor="year">year</label>
                <input
                    style={{ width: "15em" }}
                    type="number"
                    name="year"
                    value={values.year}
                    onChange={handleChange}
                    placeholder={data.year}
                />
                <label htmlFor="outcome">outcome</label>
                {/* <select
                    value={values.outcome}
                    name="outcome"
                    id="outcome"
                    onChange={handleChange}
                >
                    <option value="">select a status</option>
                    <option value="success">success</option>
                    <option value="failure">failure</option>
                    <option value="we do not know and we do not care">
                        we do not know and we do not care
                    </option>
                </select> */}

                <input
                    style={{ width: "15em" }}
                    type="text"
                    name="outcome"
                    value={values.outcome}
                    onChange={handleChange}
                    placeholder={data.outcome}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default MissionEditForm;
