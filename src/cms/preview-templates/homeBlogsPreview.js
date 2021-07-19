import React from "react";
import PropTypes from "prop-types";
import { Blogs } from "../../pages/Home/blogs";

const homeBlogsPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data"]).toJS();
  if (data.hasOwnProperty('blogs')) {
    if (data.blogs) {
      data.blogs.map(blog => {
        var getImage = getAsset(blog.blogimg);
        blog.blogimg = getImage.toString();
        return blog;
      });
    }
  }


  return (
    <div>
      <Blogs
        blogtitle={data.blogtitle}
        blogs={data.blogs}
      />
    </div>
  );

};

homeBlogsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default homeBlogsPreview;
