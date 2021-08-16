import React from "react";
import PropTypes from "prop-types";
import { Aboutus } from "../../pages/About/aboutus";

const AboutUsPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(['data', 'aboutImgs']);
    var getImage = getAsset(image);
    if (getImage) {
        var AboutImage = getImage.toString();
    }

    return (
        <div>
            <Aboutus
                abouttitle={data.abouttitle}
                aboutdesc={data.aboutdesc}
                aboutdesc2={data.aboutdesc2}
                aboutdesc3={data.aboutdesc3}
                aboutImgs={AboutImage}
            />
        </div>
    );
};

AboutUsPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default AboutUsPreview;