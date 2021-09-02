import React from "react";
import PropTypes from "prop-types";
import { Archibranded } from "../../pages/Products/archibranded";
import "../../styles/Products/Archibranded.css";

const ArchiBrandedPrev = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('archibrand')) {
        if (data.archibrand) {
            data.archibrand.map(archibrands => {
                archibrands.archibrandcards.map(archibrandcardss => {
                    var getImage = getAsset(archibrandcardss.Image);
                    archibrandcardss.Image = getImage.toString();
                    return archibrandcardss;
                })
                return archibrands;
            })
        }
    }

    return (
        <div>
            <Archibranded
                archibrand={data.archibrand}
            />
        </div>
    );
};

ArchiBrandedPrev.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ArchiBrandedPrev;