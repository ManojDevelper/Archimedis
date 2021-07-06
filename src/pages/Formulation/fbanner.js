import React from "react";
import "../../styles/Formulation/fbanner.css";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const Fbanner = () => {
    const data = useStaticQuery(graphql`
    query{
        fbanner: file(relativePath: {eq: "Formulations/fbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                description
              }
            }
          }
        }
     `)
    return (
        <>
            <div id="fbanner">
                <div id="mbanner_container">
                    <h1>{data.fbanner.childMarkdownRemark.frontmatter.description}</h1>
                </div>
            </div>
            <Top2 link="/formulation/"/>
        </>
    )
}

export default Fbanner;
