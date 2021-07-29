import React, { useState, useEffect } from "react";
import "../../styles/Home/Blogs.css";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const Blogs = ({ blogtitle, blogs }) => {
  return (
    <>
      <div id="blog">
        <h1>{blogtitle}</h1>
        <div id="blog_container">
          {blogs && blogs.map(blogItem =>
            <Link id="blog_card" key={blogItem.id} to="../Formulation/Casecompo/">
              <div id="blog_card_b1">
                {(blogItem.blogimg !== null && blogItem.blogimg.childImageSharp)
                  ? (<img src={blogItem.blogimg.childImageSharp.fluid.src} alt="img" />) :
                  (<img src={blogItem.blogimg} alt="img" />)}
              </div>
              <div id="blog_card_b2">
                <p id="bcc2title">{blogItem.blogcardtitle}</p>
                <p>{blogItem.blogcarddesc}</p>
                <p>{blogItem.blogcarddate}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
const BlogPrev = props => {
  const [blogPre, setBlogPre] = useState({});
  const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "blogs.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              blogtitle
              blogs {
                id
                blogcardtitle
                blogcarddesc
                blogcarddate
                blogimg {
                  childImageSharp {
                      fluid {
                        src
                      }
                    }
                  publicURL
                }
              }
            }
          }
        }
  }`)
  useEffect(() => {
    if (data.file) {
      setBlogPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Blogs
          blogtitle={blogPre.blogtitle}
          blogs={blogPre.blogs}
        />
      }
    </>
  )
}
export default BlogPrev;