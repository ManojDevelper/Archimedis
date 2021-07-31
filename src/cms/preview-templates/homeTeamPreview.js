import React from "react";
import PropTypes from "prop-types";
import { Team } from "../../pages/Home/team";

const homeTeamPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.hasOwnProperty('teams')) {
        if (data.teams) {
            data.teams.length > 0 && data.teams.map(teamss => {
                var getImage = getAsset(teamss.teamimg);
                teamss.teamimg = getImage.toString();
                return teamss;
            });
        }
    }

    return (
        <div>
            <Team
                teamtitle={teamPre.teamtitle}
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