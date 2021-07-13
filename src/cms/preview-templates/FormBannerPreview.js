import React from "react";
import PropTypes from "prop-types";
import Fbanner from "../../pages/Formulation/fbanner";

const FormBannerPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Fbanner
                description={data.description}
            />
        </div>
    );
};

FormBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default FormBannerPreview;