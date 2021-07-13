import React from "react";
import PropTypes from "prop-types";
import Patners from "../../pages/Home/patners";

const homePatnersPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('patners')) {
        if (data.patnercarousal) {
            data.patnercarousal.map(patnercarousals => {
                patnercarousals.patners.map(patner => {
                    patner.patnerimage.map(patnerimages => {
                        var getImage = getAsset(patnerimages.image);
                        patnerimages.image = getImage.toString();
                        return patnerimages;
                    })
                })
            });
        }
    }

    return (
        <div>
            <Patners
                Patnertitle={data.Patnertitle}
                patnerdescription={data.patnerdescription}
                patnercarousal={data.patnercarousal}
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