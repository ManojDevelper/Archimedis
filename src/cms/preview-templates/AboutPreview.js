import React from "react";
import PropTypes from "prop-types";
import About from "../../pages/Home/about";

const AboutPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();
  var image = entry.getIn(["data", 'aboutimg']);
  var getImage = getAsset(image);
  console.log(getImage);
  return (
    <div>
      <About
        abouttitle={data.abouttitle}
        aboutdesc={data.aboutdesc}
        aboutimg={getImage.toString()}
        preview={true}
      />
    </div>
  );

};

AboutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AboutPreview;
