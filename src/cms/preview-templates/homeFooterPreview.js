import React from "react";
import PropTypes from "prop-types";
import Footer from "../../pages/Home/footer";

const homeFooterPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Footer
                footer={data.footer}
            />
        </div>
    );
};

homeFooterPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homeFooterPreview;