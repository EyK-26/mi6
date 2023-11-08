import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";
import { User } from "../../context/user";
// import axios from "axios";

export default function Login() {
    const { state, dispatch } = useContext(UserContext);
    const { setUser } = useContext(User);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/login", {
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
        console.log(data);

        dispatch({
            type: "messages/set",
            payload: data.message,
        });

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    console.log("VALIDATION FAILED:", data.errors);
                    break;
                default:
                    console.log("UNKNOWN ERROR", data);
                    break;
            }
        } else {
            dispatch({
                type: "user/login",
                payload: true,
            });
            dispatch({
                type: "user/register",
                payload: true,
            });
            dispatch({
                type: "user/logout",
                payload: false,
            });

            setUser(null);
            navigate("/");
        }
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
        <>
            {state.messages && <span>{state.messages}</span>}
            <form
                action="/login"
                method="post"
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
            >
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
                <button>Login</button>
            </form>
        </>
    );
}
