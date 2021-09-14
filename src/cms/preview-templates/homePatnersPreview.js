import React from "react";
import PropTypes from "prop-types";
import { Patners } from "../../pages/Home/patners";

const homePatnersPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.hasOwnProperty('patnercarousal')) {
        if (data.patnercarousal) {
            data.patnercarousal.map(patnercarousalItem => {
                patnercarousalItem.patners.map(patnerss => {
                    patnerss.patnerimage.map(patnerimages => {
                        var getImage = getAsset(patnerimages.image);
                        patnerimages.image = getImage.toString();
                        return patnerimages;
                    })
                    return patnerss;
                })
                return patnercarousalItem;
            });
        }
    }

    return (
        <Patners
            Patnertitle={data.Patnertitle}
            patnerdescription={data.patnerdescription}
            patnercarousal={data.patnercarousal}
        />
    );
};

homePatnersPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homePatnersPreview;