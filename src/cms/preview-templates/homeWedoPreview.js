import React from "react";
import PropTypes from "prop-types";
import Wedo from "../../pages/Home/wedo";

const homeWedoPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('wedo')) {
        if (data.wedo) {
            data.wedo.map(wedos => {
                var getImage = getAsset(wedos.wedoimg);
                wedos.image = getImage.toString();
                return Wedo;
            });
        }
    }

    return (
        <div>
            <Wedo
                wedotitle={data.wedotitle}
                wedo={data.wedo}
            />
        </div>
    );
};

homeWedoPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homeWedoPreview;