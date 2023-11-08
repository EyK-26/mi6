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
        const data = await response.json();
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    console.log("LOGOUT FAILED:", data.errors);
                    break;
                default:
                    console.log("UNKNOWN ERROR", data);
                    break;
            }
        }

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
            <button>Logout</button>
        </form>
    );
}
