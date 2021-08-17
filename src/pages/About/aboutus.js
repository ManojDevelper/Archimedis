import React, { useState, useEffect } from "react";
import "../../styles/About/Aboutus.css";
import { graphql, useStaticQuery } from "gatsby";

export const Aboutus = ({ abouttitle, aboutdesc, aboutImgs, aboutdesc2, aboutdesc3 }) => {

  return (
    <>
      <div id="aboutus">
        <h1>{abouttitle}</h1>
        <h2 id="about_dec">{aboutdesc}</h2>
        <img src={aboutImgs} alt="img" />
      </div>
      <div id="aboutdescription_container">
        <p>{aboutdesc2}</p>
        <p>{aboutdesc3}</p>
      </div>
    </>
  );
};
const AboutUsPrev = props => {
  const [aboutPre, setAboutPre] = useState({});
  const data = useStaticQuery(graphql`
  query{
    file(relativePath: {eq: "About/aboutus.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                  abouttitle
                  aboutdesc
                  aboutdesc2
                  aboutdesc3
                  aboutImg {
                    publicURL
                }
              }
              html
            }
          }
}`)
  useEffect(() => {
    if (data.file) {
      setAboutPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  let AboutImage;
  if (data.file.childMarkdownRemark.frontmatter.aboutImg.publicURL) {
    AboutImage = data.file.childMarkdownRemark.frontmatter.aboutImg.publicURL;
  } else {
    AboutImage = data.file.childMarkdownRemark.frontmatter.aboutImg;
  }
  return (
    <>
      {
        data.file &&
        <Aboutus
          abouttitle={aboutPre.abouttitle}
          aboutdesc={aboutPre.aboutdesc}
          aboutdesc2={aboutPre.aboutdesc2}
          aboutdesc3={aboutPre.aboutdesc3}
          aboutImgs={AboutImage}
        />
      }
    </>
  )
}
export default AboutUsPrev;