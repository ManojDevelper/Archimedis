import React, { useState, useEffect } from "react";
import "../../styles/Products/pbanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

export const Pbanner = ({description}) => {
  return (
    <>            <Nav />
      <div id="pbanner">
        <div id="pbanner_container">
          <h1>{description}</h1>
        </div>
      </div>
      <Top2 link="/product/" />
    </>
  );
};

const PBannerPre = () => {
  const [PbannerPr, setPbannerPr] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Products/pbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                description
              }
            }
          }
        }
     `)
  useEffect(() => {
    if (data.file) {
      setPbannerPr(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Pbanner
          description={PbannerPr.description}
        />
      }
    </>
  )
}
export default PBannerPre;