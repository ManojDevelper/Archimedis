import React from "react";
import PropTypes from "prop-types";
import { Facility } from "../../pages/Manfacturing/facility";

const ManuFFacilityPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('Facility')) {
        if (data.Facility) {
            data.Facility.map(Facilitys => {
                Facilitys.Facilitycards.map(Facilitycardss => {
                    var getImage = getAsset(Facilitycardss.fimage);
                    Facilitycardss.fimage = getImage.toString();
                    return Facilitycardss;
                });
                return Facilitys;
            })
        }
    }

    return (
        <div>
            <Facility
                Facility={data.Facility}
            />
        </div>
    );
};

ManuFFacilityPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ManuFFacilityPreview;