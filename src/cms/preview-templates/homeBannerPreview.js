import React from "react";
import PropTypes from "prop-types";
import Banner from "../../pages/Home/banner";

const homeBannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Banner
                title={data.title}
                description={data.description}
                boxDescription={data.boxDescription}
                bannerTyping={data.bannerTyping}
            />
        </div>
    );

};

homeBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    })
};

export default homeBannerPreview;
