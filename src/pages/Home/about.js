import React from "react";
import "../../styles/Home/About.css";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery(graphql`
    query{
        about:file(relativePath: {eq: "about.md"}) {
              id
              childMarkdownRemark {
                frontmatter {
                    abouttitle
                    aboutdesc
                    aboutImg {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
    }`)
  return (
    <>
      <div id="about">
        <p>{data.about.childMarkdownRemark.frontmatter.abouttitle}</p>
        <img src={data.about.childMarkdownRemark.frontmatter.aboutImg.childImageSharp.fluid.src} alt="img" />
        <p id="about_dec">{data.about.childMarkdownRemark.frontmatter.aboutdesc}</p>
      </div>
    </>
  );
};
export default About;