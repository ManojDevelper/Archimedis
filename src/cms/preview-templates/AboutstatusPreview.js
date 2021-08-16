import React from "react";
import PropTypes from "prop-types";
import { Aboutstatus } from "../../pages/About/aboutstatus";

const AboutstatusPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();
  if (data.hasOwnProperty('Aboutstatus')) {
    if (data.Aboutstatus) {
      data.Aboutstatus.map(Aboutstatuss => {
        var getImage = getAsset(Aboutstatuss.icon);
        Aboutstatuss.icon = getImage.toString();
        return Aboutstatuss;
      });
    }
  }

  return (
    <div>
      <Aboutstatus
        Aboutstatus={data.Aboutstatus}
      />
    </div>
  );
};

AboutstatusPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutstatusPreview;