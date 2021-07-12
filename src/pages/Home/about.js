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
                      publicURL
                  }
                }
              }
            }
    }`)
    const abouttitle = data.about.childMarkdownRemark.frontmatter.abouttitle;
    const aboutdesc = data.about.childMarkdownRemark.frontmatter.aboutdesc;
    const aboutImg = data.about.childMarkdownRemark.frontmatter.aboutImg.publicURL;
  return (
    <>
      <div id="about">
        <p>{abouttitle}</p>
        <img src={aboutImg} alt="img" />
        <p id="about_dec">{aboutdesc}</p>
      </div>
    </>
  );
};
export default About;