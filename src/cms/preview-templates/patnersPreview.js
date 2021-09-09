import React from "react";
import PropTypes from "prop-types";
import { Patners } from "../../pages/Home/patners";

const patnersPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.hasOwnProperty('Standoutcontainer')) {
        if (data.patnercarousal) {
            data.patnercarousal.map(patnercarousals => {
                patnercarousals.patners.map(patnerss => {
                    patnerss.patnerimage.map(patnerimages => {
                        var getImage = getAsset(patnerimages.image);
                        patnerimages.image = getImage.toString();
                        return patnerimages;
                    })
                    return patnerss;
                })
                return patnercarousals;
            })
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

patnersPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default patnersPreview;