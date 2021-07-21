import React from "react";
import PropTypes from "prop-types";
import { Industry } from "../../pages/Manfacturing/industry";

const ManuIndustryPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('industry')) {
        if (data.industry) {
            data.industry.map(industrys => {
                industrys.industrycards.map(industrycardss => {
                    var getImage = getAsset(industrycardss.Image);
                    industrycardss.Image = getImage.toString();
                    return industrycardss;
                });
                return industrys;
            })
        }
    }

    return (
        <div>
            <Industry
                industry={data.industry}
            />
        </div>
    );
};

ManuIndustryPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ManuIndustryPreview;