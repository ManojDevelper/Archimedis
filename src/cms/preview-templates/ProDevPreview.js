import React from "react";
import PropTypes from "prop-types";
import { Productdev } from "../../pages/Digital/productdev";

const ProDevPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('prodev')) {
        if (data.prodev) {
            data.prodev.map(prodevs => {
                prodevs.prodevminicontainer.map(prodevminicontainers => {
                    var getImage = getAsset(prodevminicontainers.Image);
                    prodevminicontainers.Image = getImage.toString();
                    return prodevminicontainers;
                });
                return prodevs;
            });
        }
    }

    return (
        <div>
            <Productdev
                prodev={data.prodev}
            />
        </div>
    );
};

ProDevPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ProDevPreview;