import React from "react";

const MissionPeople = ({ missionPeopleList }) => {
    return (
        <ul>
            {missionPeopleList &&
                missionPeopleList.map((el) => <li key={el.id}>{el.name}</li>)}
        </ul>
    );
};

export default MissionPeople;
