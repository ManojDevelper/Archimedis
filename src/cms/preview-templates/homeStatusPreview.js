import React from "react";
import PropTypes from "prop-types";
import { Status } from "../../pages/Home/status";

const homePatnersPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('Status')) {
        if (data.Status) {
            data.Status.map(Statuss => {
                var getImage = getAsset(Statuss.statusimage);
                Statuss.statusimage = getImage.toString();
                return Status;
            });
        }
    }

    return (
        <div>
            <Status
                Status={data.Status}
            />
        </div>
    );
};

homePatnersPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homePatnersPreview;