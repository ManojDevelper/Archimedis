import React from "react";
import "../../styles/Products/pbanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const Pbanner = () => {
    const data = useStaticQuery(graphql`
    query{
        Pbanner: file(relativePath: {eq: "Products/pbanner.md"}) {
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
            <div id="pbanner">
                <div id="pbanner_container">
                    <h1>{data.Pbanner.childMarkdownRemark.frontmatter.description}</h1>
                </div>
            </div>
            <Top2 link="/products/" />
        </>
    );
};
export default Pbanner;