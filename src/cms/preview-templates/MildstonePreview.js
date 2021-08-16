import React from "react";
import PropTypes from "prop-types";
import { Mildstone } from "../../pages/About/mildstone";

const MildstonePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('mildstone')) {
        if (data.mildstone) {
            data.mildstone.map(mildstones => {
                var getImage = getAsset(mildstones.mildstonecontainericon);
                mildstones.mildstonecontainericon = getImage.toString();
                return mildstones;
            });
        }
    }

    return (
        <div>
            <Mildstone
                title={data.title}
                description={data.description}
                mildstone={data.mildstone}
            />
        </div>
    );
};

MildstonePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default MildstonePreview;