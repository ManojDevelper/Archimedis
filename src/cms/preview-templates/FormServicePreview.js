import React from "react";
import PropTypes from "prop-types";
import Fservice from "../../pages/Formulation/fservice";

const FormServicePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    return (
        <div>
            <Fservice
                description={data.description}
            />
        </div>
    );
};

FormServicePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default FormServicePreview;