import React from "react";
import PropTypes from "prop-types";
import { Dbanner } from "../../pages/Digital/dbanner";

const DBannerPreview = ({ entry }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Dbanner
                description={data.description}
            />
        </div>
    );
};

DBannerPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default DBannerPreview;