import React from "react";
import PropTypes from "prop-types";
import Blogs from "../../pages/Home/blogs";

const homeBlogsPreview = ({ entry, getAsset }) => {

  const data = entry.getIn(["data.Blogs.childMarkdownRemark.frontmatter"]).toJS();
  var image = entry.getIn(["data.Blogs.childMarkdownRemark.frontmatter.blogs.blogimg.publicURL"]);
  var getImage = getAsset(image);

  if (getImage) {
    var BlogsImage = getImage.toString();
  }

  return (
    <div>
      <Blogs
        blogtitle={data.blogtitle}
        blogcardtitle={data.blogs.blogcardtitle}
        blogcarddesc={data.blogs.blogcarddesc}
        blogcarddate={data.blogs.blogcarddate}
        blogimg={BlogsImage}
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
