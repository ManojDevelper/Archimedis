import React from "react";
import PropTypes from "prop-types";
import { Aboutbanner } from "../../pages/About/aboutBanner";

const AbannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <Aboutbanner
            AboutDescription={data.AboutDescription}
        />
    );
};

AbannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default AbannerPreview;