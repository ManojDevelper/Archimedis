import React from "react";
import PropTypes from "prop-types";
import { About } from "../../pages/Home/about";

const AboutPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(['data', 'aboutImgs']);
    var getImage = getAsset(image);
    if (getImage) {
        var AboutImage = getImage.toString();
    }
    console.log(AboutImage)
    return (
        <About
            abouttitle={data.abouttitle}
            aboutdesc={data.aboutdesc}
            aboutImgs={AboutImage}
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
