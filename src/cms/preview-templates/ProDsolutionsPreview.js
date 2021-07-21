import React from "react";
import PropTypes from "prop-types";
import { Dsolutions } from "../../pages/Digital/dsolutions";

const ProDsolutionsPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('dsolution')) {
        if (data.dsolution) {
            data.dsolution.map(dsolutions => {
                dsolutions.dsolutioncards.map(dsolutioncardss => {
                    var getImage = getAsset(dsolutioncardss.Image);
                    dsolutioncardss.Image = getImage.toString();
                    dsolutioncardss.dsolutionminicards.map(dsolutionminicardss => {
                        var getImage = getAsset(dsolutionminicardss.dsolutionminicardsimg);
                        dsolutionminicardss.dsolutionminicardsimg = getImage.toString();
                        return dsolutionminicardss;
                    })
                    dsolutioncardss.dsolutionminicards2.map(dsolutionminicards2s => {
                        var getImage = getAsset(dsolutionminicards2s.Image);
                        dsolutionminicards2s.Image = getImage.toString();
                        return dsolutionminicards2s;
                    })
                    return dsolutioncardss;
                })
                return dsolutions;
            })
        }
    }

    return (
        <div>
            <Dsolutions
                dsolution={data.dsolution}
            />
        </div>
    );
};

ProDsolutionsPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ProDsolutionsPreview;