import React, { useState, useEffect } from "react";
import "../../styles/Home/About.css";
import { graphql, useStaticQuery } from "gatsby";

export const About = ({ abouttitle, aboutdesc }) => {

  return (
    <>
      <div id="about">
        <h1>{abouttitle}</h1>
        <h2 id="about_dec">{aboutdesc}</h2>
      </div>
    </>
  );
};
const AboutPrev = props => {
  const [aboutPre, setAboutPre] = useState({});
  const data = useStaticQuery(graphql`
  query{
    file(relativePath: {eq: "about.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                  abouttitle
                  aboutdesc
              }
            }
          }
}`)
  useEffect(() => {
    if (data.file) {
      setAboutPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <About
          abouttitle={aboutPre.abouttitle}
          aboutdesc={aboutPre.aboutdesc}
        />
      }
    </>
  )
}
export default AboutPrev;