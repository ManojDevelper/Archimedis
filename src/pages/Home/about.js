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
                    aboutimg {
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
  const aboutimg = data.about.childMarkdownRemark.frontmatter.aboutimg;

  return (
    <>
      <div id="about">
        <p>{abouttitle}</p>
        {aboutimg && aboutimg.childImageSharp ? (
        <>
        {aboutimg.extension === "svg" && aboutimg.childImageSharp === null ? (<img src={aboutimg.publicURL} alt="img" />) : (<img src={aboutimg.childImageSharp.fluid.src} alt="img" />)}
        </>
        ) : (<img src={aboutimg} alt="img" />)}
        <p id="about_dec">{aboutdesc}</p>
      </div>
    </>
  );
};
export default About;