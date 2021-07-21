import React from "react";
import PropTypes from "prop-types";
import { Casestudy } from "../../pages/Formulation/casestudy";

const fCasestudyPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('Casestudy')) {
        if (data.Casestudy) {
            data.Casestudy.map(Casestudys => {
                Casestudys.Casestudycards.map(Casestudycardss => {
                    var getImage = getAsset(Casestudycardss.image);
                    Casestudycardss.image = getImage.toString();
                    return Casestudycardss;
                });
                return Casestudys;
            })
        }
    }

    return (
        <div>
            <Casestudy
                Casestudy={data.Casestudy}
            />
        </div>
    );
};

fCasestudyPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default fCasestudyPreview;