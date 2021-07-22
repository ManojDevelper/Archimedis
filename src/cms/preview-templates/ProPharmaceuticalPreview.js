import React from "react";
import PropTypes from "prop-types";
import { Pharmaceutical } from "../../pages/Products/pharmaceutical";

const ProPharmaceuticalPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('pharmaceutical')) {
        if (data.pharmaceutical) {
            data.pharmaceutical.map(pharmaceuticals => {
                pharmaceuticals.pharmaceuticalcards.map(pharmaceuticalcardss => {
                        var getImage = getAsset(pharmaceuticalids.Image);
                        pharmaceuticalids.Image = getImage.toString();
                    return pharmaceuticalcardss;
                })
                return pharmaceuticals;
            })
        }
    }

    return (
        <div>
            <Pharmaceutical
                pharmaceutical={data.pharmaceutical}
            />
        </div>
    );
};

ProPharmaceuticalPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ProPharmaceuticalPreview;