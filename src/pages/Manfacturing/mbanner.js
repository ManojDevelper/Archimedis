import React from "react";
import "../../styles/Manfacture/MBanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

const MBanner = () => {
    const data = useStaticQuery(graphql`
    query{
        Mbanner: file(relativePath: {eq: "Manfacturing/mbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                description
              }
            }
          }
        }
     `)
    return (
        <> <Nav />
            <div id="mbanner">
                <div id="mbanner_container">
                    <h1>{data.Mbanner.childMarkdownRemark.frontmatter.description}</h1>
                </div>
            </div>
            <Top2 link="/manfacture/" />
        </>
    );
};
export default MBanner;