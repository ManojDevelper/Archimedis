import React from "react";
import PropTypes from "prop-types";
import { About } from "../../pages/Home/about";

const AboutPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    return (
        <About
            abouttitle={data.abouttitle}
            aboutdesc={data.aboutdesc}
        />
    );

};

AboutPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default AboutPreview;
