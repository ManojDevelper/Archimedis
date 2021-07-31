import React from "react";
import PropTypes from "prop-types";
import { Pbanner } from "../../pages/Products/pbanner";

const ProBannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Pbanner
                 description={data.description}
            />
        </div>
    );
};

ProBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default ProBannerPreview;