import React from "react";
import PropTypes from "prop-types";
import { Fbanner } from "../../pages/Formulation/fbanner";

const FBannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Fbanner
               Formulationsdescription={data.Formulationsdescription}
            />
        </div>
    );
};

FBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default FBannerPreview;