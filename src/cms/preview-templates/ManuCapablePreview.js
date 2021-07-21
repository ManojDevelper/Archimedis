import React from "react";
import PropTypes from "prop-types";
import { Capable } from "../../pages/Manfacturing/capable";

const ManuCapablePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('Capabilities')) {
        if (data.Capabilities) {
            data.Capabilities.map(Capabilitiess => {
                Capabilitiess.capabilitiescards.map(capabilitiescardss => {
                    var getImage = getAsset(capabilitiescardss.image);
                    capabilitiescardss.image = getImage.toString();
                    capabilitiescardss.capabilitiesminicards.map(capabilitiesminicardss => {
                        var getImage = getAsset(capabilitiesminicardss.image);
                        capabilitiesminicardss.image = getImage.toString();
                        return capabilitiesminicardss;
                    })
                    return capabilitiescardss;
                });
                return Capabilitiess;
            })
        }
    }

    return (
        <div>
            <Capable
                Capabilities={data.Capabilities}
            />
        </div>
    );
};

ManuCapablePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ManuCapablePreview;