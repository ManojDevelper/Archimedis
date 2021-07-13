import React from "react";
import PropTypes from "prop-types";
import Team from "../../pages/Home/team";

const homeTeamPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('teams')) {
        if (data.teams) {
            data.teams.map(teamss => {
                teamss.team.map(teamItem => {
                    var getImage = getAsset(teamItem.teamimg);
                    teamItem.teamimg = getImage.toString();
                    return teamItem;
                })
            });
        }
    }

    return (
        <div>
            <Team
                teams={data.teams}
            />
        </div>
    );
};

homeTeamPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homeTeamPreview;