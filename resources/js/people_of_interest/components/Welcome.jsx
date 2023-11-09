import React, { useContext } from "react";
import { User } from "../context/user";

const Welcome = () => {
    const { user } = useContext(User);
    return (
        <>
            <h1>Welcome to MI6</h1>
            {user ? <h2>logged in as {user.name}</h2> : ""}
        </>
    );
};

export default Welcome;
