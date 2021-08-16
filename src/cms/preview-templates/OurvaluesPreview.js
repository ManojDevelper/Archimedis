import React from "react";
import PropTypes from "prop-types";
import { Ourvalues } from "../../pages/About/ourvalues";

const OurvaluesPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('ourValues')) {
        if (data.ourValues) {
            data.ourValues.map(ourValuess => {
                var getImage = getAsset(ourValuess.image);
                ourValuess.image = getImage.toString();
                return ourValuess;
            });
        }
    }

    return (
        <div>
            <Ourvalues
                title={data.title}
                ourValues={data.ourValues}
            />
        </div>
    );
};

OurvaluesPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default OurvaluesPreview;