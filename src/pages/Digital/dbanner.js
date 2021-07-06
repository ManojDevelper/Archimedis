import React from "react";
import "../../styles/Digital/dbanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const Dbanner = () => {
    const data = useStaticQuery(graphql`
    query{
        Dbanner: file(relativePath: {eq: "Digital/dbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                description
              }
            }
          }
        }
     `)
    return (
        <>            <Nav />
            <div id="dbanner">
                <div id="dbanner_container">
                    <h1>{data.Dbanner.childMarkdownRemark.frontmatter.description}</h1>
                </div>
            </div>
            <Top2 link="/digital/" />
        </>
    );
};
export default Dbanner;