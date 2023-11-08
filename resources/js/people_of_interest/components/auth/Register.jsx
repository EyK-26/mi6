import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
// import axios from "axios";

export default function Register() {
    const { state, dispatch } = useContext(UserContext);

    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/register", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const data = await response.json();

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    console.log("VALIDATION FAILED:", data.errors);
                    break;
                default:
                    console.log("UNKNOWN ERROR", data);
                    break;
            }
        }

        dispatch({
            type: "user/register",
            payload: true,
        });

        // try {
        //     const response = await axios.post('/register', values);
        //     const data = response.data;
        // } catch (error) {
        //     switch (error.response.status) {
        //         case 422:
        //             console.log('VALIDATION FAILED:', error.response.data.errors);
        //              break;
        //         case 500:
        //             console.log('UNKNOWN ERROR', error.response.data);
        //             break;
        //     }
        // }
    };

    const handleChange = (e) => {
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <form
            action="/register"
            method="post"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <label htmlFor="name">name</label>
            <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <label htmlFor="email">email</label>
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <label htmlFor="password">password</label>
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            <label htmlFor="password_confirmation">password confirmation</label>
            <input
                type="password"
                name="password_confirmation"
                value={values.password_confirmation}
                onChange={handleChange}
            />
            <button>Register</button>
        </form>
    );
}
