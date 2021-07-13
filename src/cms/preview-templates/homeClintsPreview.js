import React from "react";
import PropTypes from "prop-types";
import Clints from "../../pages/Home/clints";

const homeClintsPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();
  if (data.hasOwnProperty('clints')) {
    if (data.clints) {
      data.clints.map(clint => {
        var getImage = getAsset(clint.clintimg);
        clint.clintimg = getImage.toString();
        return clint;
      });
    }
  }

  return (
    <div>
      <Clints
        clintstitle={data.clintstitle}
        clints={data.clints}
      />
    </div>
  );
};

homeClintsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default homeClintsPreview;