import React from "react";
import { Fragment } from "react";

const MissionPeople = ({ missionPeopleList }) => {
    return (
        <Fragment>
            <div>Working agents</div>
            <ul>
                {missionPeopleList &&
                    missionPeopleList.map((el) => (
                        <li key={el.id}>{el.name}</li>
                    ))}
            </ul>
        </Fragment>
    );
};

export default MissionPeople;
