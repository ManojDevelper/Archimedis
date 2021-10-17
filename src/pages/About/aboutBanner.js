import React, { useState, useEffect } from "react";
import "../../styles/About/aboutbanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

export const Aboutbanner = ({ AboutDescription }) => {
  return (
    <>            <Nav />
      <div id="abanner">
        <div id="abanner_container">
          <h1>{AboutDescription}</h1>
        </div>
      </div>
      <Top2 link="/aboutus/" />
    </>
  );
};
const AbannerPre = props => {
  const [abannerPre, setabannerPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "About/aboutbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                AboutDescription
              }
            }
          }
        }
     `)
  useEffect(() => {
    if (data.file) {
      setabannerPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Aboutbanner
          AboutDescription={abannerPre.AboutDescription}
        />
      }
    </>
  )
}
export default AbannerPre;