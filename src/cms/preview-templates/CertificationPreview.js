import React from "react";
import PropTypes from "prop-types";
import { Certification } from "../../pages/About/certification";

const CertificationPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    if (data.hasOwnProperty('certificationImages')) {
        if (data.certificationImages) {
            data.certificationImages.map(certificationImagess => {
                var getImage = getAsset(certificationImagess.icon);
                certificationImagess.icon = getImage.toString();
                return certificationImagess;
            });
        }
    }

    return (
        <div>
            <Certification
                title={data.title}
                certificationImages={data.certificationImages}
            />
        </div>
    );
};

CertificationPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default CertificationPreview;