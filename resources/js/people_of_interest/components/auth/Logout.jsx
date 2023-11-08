import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Logout() {
    const { state, dispatch } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/logout", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        dispatch({
            type: "user/login",
            payload: false,
        });
        dispatch({
            type: "user/register",
            payload: false,
        });
        dispatch({
            type: "user/logout",
            payload: true,
        });
    };

    return (
        <form
            action="/logout"
            method="post"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <label htmlFor="logout">Are you sure you want to logout?</label>
            <button>Logout</button>
        </form>
    );
}
