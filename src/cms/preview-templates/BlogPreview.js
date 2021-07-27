import React from "react";
import PropTypes from "prop-types";
import moment  from 'moment';

import { BlogPost } from "../../components/Blog";

const BlogPreview = ({ entry, widgetFor, getAsset, getAssets }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.date) {
    var date = moment(data.date).format("MMMM DD YYYY")
  }

  var image = entry.getIn(['data', 'author_image',]);
  var getImage = getAsset(image);

  if(getImage) {
    var authorImage = getImage.toString();
  }

  var images = entry.getIn(['data', 'Banner_image',]);
  var getImages = getAssets(images);

  if(getImages) {
    var bannerImage = getImages.toString();
  }
  return (
    <BlogPost
      author_image={authorImage}
      Banner_image={bannerImage}
      author={data.author}
      bio={data.bio}
      date={date}
      title={data.title}
      html={widgetFor('body')}
      preview={true}
      tags={data.tags}
    />
  );

};

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  getAssets: PropTypes.func,
};

export default BlogPreview;
