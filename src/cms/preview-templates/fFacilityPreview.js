import React from "react";
import PropTypes from "prop-types";
import { Ffacility } from "../../pages/Formulation/ffacility";

const fFacilityPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('Ffacility')) {
        if (data.Ffacility) {
            data.Ffacility.map(Ffacilitys => {
                Ffacilitys.Ffacilitycards.map(Ffacilitycardss => {
                    var getImage = getAsset(Ffacilitycardss.ffacilitypic);
                    Ffacilitycardss.ffacilitypic = getImage.toString();
                    return Ffacilitycardss;
                });
                return Ffacilitys;
            })
        }
    }

    return (
        <div>
            <Ffacility
                Ffacility={data.Ffacility}
            />
        </div>
    );
};

fFacilityPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default fFacilityPreview;