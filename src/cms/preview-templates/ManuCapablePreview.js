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

    if (data.hasOwnProperty('Status')) {
        if (data.Status) {
            data.Status.map(Statuss => {
                var getImage = getAsset(Statuss.statusimage);
                Statuss.statusimage = getImage.toString();
                return Statuss;
            })
        }
    }

    return (
        <div>
            <Capable
                Capabilities={data.Capabilities}
                Status={data.Status}
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