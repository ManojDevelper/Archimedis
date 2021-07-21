import React from "react";
import PropTypes from "prop-types";
import { Quality } from "../../pages/Manfacturing/quality";

const ManuQualityPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('Quality')) {
        if (data.Quality) {
            data.Quality.map(Qualitys => {
                var getImage = getAsset(Qualitys.Image);
                Qualitys.Image = getImage.toString();
                return Qualitys;
            })
        }
    }

    return (
        <div>
            <Quality
                Quality={data.Quality}
            />
        </div>
    );
};

ManuQualityPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ManuQualityPreview;