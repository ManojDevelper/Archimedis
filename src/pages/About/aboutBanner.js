import React from "react";
import "../../styles/About/aboutbanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const Aboutbanner = () => {
    const data = useStaticQuery(graphql`
    query{
        Dbanner: file(relativePath: {eq: "About/aboutbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                AboutDescription
              }
            }
          }
        }
     `)
     const description = data.Dbanner.childMarkdownRemark.frontmatter.AboutDescription;
    return (
        <>            <Nav />
            <div id="dbanner">
                <div id="dbanner_container">
                    <h1>{description}</h1>
                </div>
            </div>
            <Top2 link="/digital/" />
        </>
    );
};
export default Aboutbanner;