import React from "react";
import PropTypes from "prop-types";
import { Qualityassurance } from "../../pages/Manfacturing/qualityassurance";

const ManuQAssurancePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('qualityassurance')) {
        if (data.qualityassurance) {
            data.qualityassurance.map(qualityassurances => {
                qualityassurances.qualityassuranceminicontainer.map(qualityassuranceminicontainers => {
                    var getImage = getAsset(qualityassuranceminicontainers.image);
                    qualityassuranceminicontainers.image = getImage.toString();
                    return qualityassuranceminicontainers;
                })
                return qualityassurances;
            })
        }
    }

    return (
        <div>
            <Qualityassurance
                qualityassurance={data.qualityassurance}
            />
        </div>
    );
};

ManuQAssurancePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ManuQAssurancePreview;