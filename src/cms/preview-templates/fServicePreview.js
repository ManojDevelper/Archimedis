import React from "react";
import PropTypes from "prop-types";
import { Fservice } from "../../pages/Formulation/fservice";

const fServicePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('fservices')) {
        if (data.fservices) {
            data.fservices.map(fservicess => {
                fservicess.fservicecards.map(fservicecardss => {
                    var getImage = getAsset(fservicecardss.fservicepic);
                    fservicecardss.fservicepic = getImage.toString();
                    fservicecardss.fserviceminicards.map(fserviceminicardss => {
                        var getImage = getAsset(fservicecardss.fserviceminicardsimg);
                        fservicecardss.fserviceminicardsimg = getImage.toString();
                        return fserviceminicardss;
                    })
                    return fservicecardss;
                });
                return fservicess;
            })
        }
    }

    return (
        <div>
            <Fservice
                fservices={data.fservices}
            />
        </div>
    );
};

fServicePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default fServicePreview;