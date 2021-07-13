import React from "react";
import "../../styles/Formulation/fbanner.css";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const Fbanner = () => {
    const data = useStaticQuery(graphql`
    query{
        Fbanner: file(relativePath: {eq: "Formulations/fbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                description
              }
            }
          }
        }
     `)
     const description = data.Fbanner.childMarkdownRemark.frontmatter.description;
    return (
        <>
            <div id="fbanner">
                <div id="mbanner_container">
                    <h1>{description}</h1>
                </div>
            </div>
            <Top2 link="/formulation/"/>
        </>
    )
}

export default Fbanner;
