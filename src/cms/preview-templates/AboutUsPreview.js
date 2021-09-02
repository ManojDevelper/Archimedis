import React from "react";
import PropTypes from "prop-types";
import { Aboutus } from "../../pages/About/aboutus";

const AboutUsPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(['data', 'aboutImg']);
    var getImage = getAsset(image);
    if (getImage) {
        var AboutImage = getImage.toString();
    }

    return (
        <Aboutus
            title={data.title}
            description={data.description}
            description2={data.description2}
            description3={data.description3}
            alttag={data.alttag}
            aboutImg={AboutImage}
        />
    );
};

AboutUsPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default AboutUsPreview;