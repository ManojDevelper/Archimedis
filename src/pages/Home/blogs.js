import React from "react";
import "../../styles/Home/Blogs.css";
import { graphql, useStaticQuery } from "gatsby";

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query{
        Blogs:file(relativePath: {eq: "blogs.md"}) {
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
                  }
                }
              }
            }
          }
    }`)
  return (
    <>
      <div id="blog">
        <h1>{data.Blogs.childMarkdownRemark.frontmatter.blogtitle}</h1>
        <div id="blog_container">
          {data.Blogs.childMarkdownRemark.frontmatter.blogs.map(blogss =>
            <div id="blog_card" key={blogss.id}>
              <div id="blog_card_b1">
                <img src={blogss.blogimg.childImageSharp.fluid.src} alt="img" />
              </div>
              <div id="blog_card_b2">
                <p>{blogss.blogcardtitle}</p>
                <p>{blogss.blogcarddesc}</p>
                <p>{blogss.blogcarddate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Blogs;