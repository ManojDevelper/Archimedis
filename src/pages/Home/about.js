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
    const aboutPrev = data.about.childMarkdownRemark.frontmatter;
    const aboutImg = aboutPrev.aboutImg.publicURL
  return (
    <>
      <div id="about">
        <p>{aboutPrev.abouttitle}</p>
        <img src={aboutImg} alt="img" />
        <p id="about_dec">{aboutPrev.aboutdesc}</p>
      </div>
    </>
  );
};
export default About;