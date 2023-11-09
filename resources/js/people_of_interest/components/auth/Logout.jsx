import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";
import { User } from "../../context/user";

export default function Logout() {
    const { setUser } = useContext(User);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        const response = await fetch("/logout", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const data = await response.json();
        console.log(data);

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
            setUser(null);
            navigate("/");
        }
    };

    return (
        <>
            <span htmlFor="logout">Are you sure you want to logout?</span>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
