import React from "react";
import "../../styles/Home/Blogs.css";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

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
                    publicURL
                  }
                }
              }
            }
          }
    }`)
  const blogtitle = data.Blogs.childMarkdownRemark.frontmatter.blogtitle;
  const blogs = data.Blogs.childMarkdownRemark.frontmatter.blogs;

  return (
    <>
      <div id="blog">
        <h1>{blogtitle}</h1>
        <div id="blog_container">
          {blogs.map(blogitem =>
            <Link id="blog_card" key={blogitem.id} to="../Formulation/Casecompo/">
              <div id="blog_card_b1">
                <img src={blogitem.blogimg.publicURL} alt="img" />
              </div>
              <div id="blog_card_b2">
                <p id="bcc2title">{blogitem.blogcardtitle}</p>
                <p>{blogitem.blogcarddesc}</p>
                <p>{blogitem.blogcarddate}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Blogs;