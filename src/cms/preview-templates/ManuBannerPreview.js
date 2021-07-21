import React from "react";
import PropTypes from "prop-types";
import { MBanner } from "../../pages/Manfacturing/mbanner";

const ManuBannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <MBanner
                description={data.description}
            />
        </div>
    );
};

ManuBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default ManuBannerPreview;