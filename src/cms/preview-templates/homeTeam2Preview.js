import React from "react";
import PropTypes from "prop-types";
import { Team2 } from "../../pages/Home/bod";

const homeTeam2Preview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.hasOwnProperty('teams2')) {
        if (data.teams2) {
            console.log(data.teams2)
            data.teams2.map(teamss => {
                teamss.team.map(teamItem => {
                    var getImage = getAsset(teamItem.teamimg);
                    teamItem.teamimg = getImage.toString();
                    return teamItem;
                })
                return teamss;
            });
        }
    }

    return (
        <div>
            <Team2
                teams2={data.teams2}
            />
        </div>
    );
};

homeTeam2Preview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homeTeam2Preview;