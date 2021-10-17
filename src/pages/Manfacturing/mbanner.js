import React, { useState, useEffect } from "react";
import "../../styles/Manfacture/MBanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

export const MBanner = ({ description }) => {

  return (
    <> <Nav />
      <div id="mbanner">
        <div id="mbanner_container">
          <h1>{description}</h1>
        </div>
      </div>
      <Top2 link="/manufacture/" />
    </>
  );
};
const MBannerPrev = props => {
  const [MbannerPre, setMbannerPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
       file(relativePath: {eq: "Manfacturing/mbanner.md"}) {
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
      setMbannerPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <MBanner
          description={MbannerPre.description}
        />
      }
    </>
  )
}
export default MBannerPrev;