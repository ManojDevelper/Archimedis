import React from "react";
import PropTypes from "prop-types";
import { Footer } from "../../pages/Home/footer";

const homeFooterPreview = ({ entry }) => {

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
};

export default homeFooterPreview;