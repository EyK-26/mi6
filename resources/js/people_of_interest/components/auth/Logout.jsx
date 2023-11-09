import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";
import { User } from "../../context/user";
import axios from "axios";

export default function Logout() {
    const { setUser } = useContext(User);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        const response = await axios.post("/logout");
        setUser(null);
        navigate("/");

        // if (Math.floor(response.status / 100) !== 2) {
        //     switch (response.status) {
        //         case 422:
        //             console.log("VALIDATION FAILED:", data.errors);
        //             break;
        //         default:
        //             console.log("UNKNOWN ERROR", data);
        //             break;
        //     }
        // } else {

        // }
    };

    return (
        <>
            <span htmlFor="logout">Are you sure you want to logout?</span>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
