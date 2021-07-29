import React from "react";
import PropTypes from "prop-types";
import moment  from 'moment';

import { BlogPost } from "../../components/Blog";

const BlogPreview = ({ entry, widgetFor, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();

  if(data.date) {
    var date = moment(data.date).format("MMMM DD YYYY")
  }

  var image = entry.getIn(['data', 'author_image']);
  var getImage = getAsset(image);

  if(getImage) {
    var authorImage = getImage.toString();
  }


  var image2 = entry.getIn(['data', 'previewImage']);
  var getImage2 = getAsset(image2);

  if(getImage) {
    var preview_Image = getImage2.toString();
  }

  return (
    <BlogPost
      author_image={authorImage}
      previewImage={preview_Image}
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
};

export default BlogPreview;
