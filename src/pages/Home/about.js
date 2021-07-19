import React, { useState, useEffect } from "react";
import "../../styles/Home/About.css";
import { graphql, useStaticQuery } from "gatsby";

export const About = ({ abouttitle, aboutdesc, aboutImgs }) => {

  return (
    <>
      <div id="about">
        <p>{abouttitle}</p>
        <img src={aboutImgs} alt="img"/>
        <p id="about_dec">{aboutdesc}</p>
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
                    aboutImg {
                      publicURL
                      extension
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
  useEffect(() => {
    if (data.file) {
      setAboutPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  let AboutImage;
  if (data.file.childMarkdownRemark.frontmatter.aboutImg !== null && data.file.childMarkdownRemark.frontmatter.aboutImg.childImageSharp.fluid.src !== null) {
    AboutImage = data.file.childMarkdownRemark.frontmatter.aboutImg.publicURL;
  } else {
    AboutImage = data.file.childMarkdownRemark.frontmatter.aboutImg.childImageSharp.fluid.src;
  }
  return (
    <>
      {
        data.file &&
        <About
          abouttitle={aboutPre.abouttitle}
          aboutdesc={aboutPre.aboutdesc}
          aboutImgs={AboutImage}
        />
      }
    </>
  )
}
export default AboutPrev;