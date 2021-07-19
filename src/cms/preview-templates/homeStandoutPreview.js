import React from "react";
import PropTypes from "prop-types";
import { Standout } from "../../pages/Home/standout";

const homeStandoutPreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();
  
    if (data.hasOwnProperty('Standoutcontainer')) {
        if (data.Standoutcontainer) {
            data.Standoutcontainer.map(Standoutcontainers => {
                var getImage = getAsset(Standoutcontainers.standimage);
                Standoutcontainers.standimage = getImage.toString();
                return Standoutcontainers;
            })
        }
    }

    return (
        <div>
            <Standout
                title={data.title}
                description={data.description}
                Standoutcontainer={data.Standoutcontainer}
            />
        </div>
    );
};

homeStandoutPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default homeStandoutPreview;