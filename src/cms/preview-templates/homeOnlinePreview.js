import React from "react";
import PropTypes from "prop-types";
import { Online } from "../../pages/Home/online";

const homeOnlinePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  var image = entry.getIn(["data", 'onlineimg']);
  var getImage = getAsset(image);

  if (getImage) {
    var onlineImage = getImage.toString();
  }

  return (
    <div>
      <Online
        abouttitle={data.onlinetitle}
        aboutdesc={data.onlinedesc}
        onlineimg={onlineImage}
      />
    </div>
  );

};

homeOnlinePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default homeOnlinePreview;
