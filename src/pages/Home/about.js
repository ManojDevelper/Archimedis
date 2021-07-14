import React from "react";
import "../../styles/Home/About.css";
import { graphql, useStaticQuery } from "gatsby";
import _ from "lodash";

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
  const abouttitle = data.about.childMarkdownRemark.frontmatter.abouttitle;
  const aboutdesc = data.about.childMarkdownRemark.frontmatter.aboutdesc;
  const aboutImg = data.about.childMarkdownRemark.frontmatter.aboutImg;

  return (
    <>
      <div id="about">
        <p>{abouttitle}</p>
        {aboutImg.extension === "svg" && aboutImg.childImageSharp === null && aboutImg ? (<img src={aboutImg} alt="img" />) : (
        <>
        {aboutImg.extension === "svg" && aboutImg.childImageSharp === null ? (<img src={aboutImg.publicURL} alt="img" />) : (<img src={aboutImg.childImageSharp.fluid.src} alt="img" />)}
        </>
        )}
        <p id="about_dec">{aboutdesc}</p>
      </div>
    </>
  );
};
export default About;