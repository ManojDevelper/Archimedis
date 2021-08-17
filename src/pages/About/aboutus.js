import React, { useState, useEffect } from "react";
import "../../styles/About/Aboutus.css";
import { graphql, useStaticQuery } from "gatsby";

export const Aboutus = ({ title, description, aboutImg, description2, description3 }) => {

  return (
    <>
      <div id="aboutus">
        <h1>{title}</h1>
        <h2 id="about_dec">{description}</h2>
        <img src={aboutImg} alt="img" />
      </div>
      <div id="descriptionription_container">
        <p>{description2}</p>
        <p>{description3}</p>
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
                  title
                  description
                  description2
                  description3
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
          title={aboutPre.title}
          description={aboutPre.description}
          description2={aboutPre.description2}
          description3={aboutPre.description3}
          aboutImg={AboutImage}
        />
      }
    </>
  )
}
export default AboutUsPrev;